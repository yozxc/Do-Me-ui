import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { AddTaskData } from '@app/core/types/domain/task';
import { SelectedProject } from '@app/core/types/realization/selectedProject';
import { ProjectsQuery } from '@core/store/projects/projects.query';
import { SectionsQuery } from '@core/store/sections/sections.query';
import { TasksService } from '@core/store/tasks/tasks.service';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent implements OnInit {
    isFocused: boolean = false;
    addButtonDisabled: boolean = true;
    visibleLabelStart!: boolean;

    @Input() visibleLabel: boolean = true;
    @Input() label: string = 'Add Task';

    @Input() activeLabelsID: string[] = [];
    @Input() projectID: string | null = null;
    @Input() sectionID: string | null = null;

    @Output() cancelEvent: EventEmitter<any> = new EventEmitter();
    @Output() saveEvent: EventEmitter<any> = new EventEmitter();

    form = this.fb.group<AddTaskForm>({
        name: '',
        description: null,
        priority: 4,
        projectID: null,
        sectionID: null,
        // ---
        labelsID: this.fb.array<string>([])
    });

    constructor(
        private fb: FormBuilder,
        private tasksService: TasksService,
        public projectsQuery: ProjectsQuery,
        public sectionsQuery: SectionsQuery
    ) {}

    ngOnInit(): void {
        this.visibleLabelStart = this.visibleLabel;

        this.form.get('name')?.valueChanges.subscribe((value) => (this.addButtonDisabled = !value?.length));

        this.form.patchValue({ labelsID: this.activeLabelsID, projectID: this.projectID, sectionID: this.sectionID });
    }

    resetForm() {
        this.form.patchValue({
            name: '',
            description: null,
            priority: 4,
            projectID: this.projectID,
            sectionID: this.sectionID
        });
    }

    setSelected(selected: SelectedProject) {
        this.form.patchValue(selected);
    }

    onCancel() {
        this.resetForm();

        this.cancelEvent.emit();

        this.visibleLabel = true;
    }

    onSave() {
        // todo : check for form validation
        this.form.value.name && this.tasksService.addTask(this.form.value as AddTaskData);

        this.resetForm();

        this.saveEvent.emit();

        this.visibleLabel = true;
    }
}

interface AddTaskForm extends Omit<AddTaskData, 'labelsID'> {
    labelsID: FormArray<FormControl<string | null>>;
}

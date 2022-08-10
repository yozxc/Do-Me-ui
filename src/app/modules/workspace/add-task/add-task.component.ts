import { SectionsQuery } from '@core/store/sections/sections.query';
import { ProjectsQuery } from '@core/store/projects/projects.query';
import { TasksService } from '@core/store/tasks/tasks.service';
import { Component, ChangeDetectionStrategy, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { AddTaskDTO } from '@app/core/types/domain/task';
import { SelectedProject } from '@app/core/types/realization/selectedProject';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent implements OnInit {
    isFocused: boolean = false;
    addButtonDisabled: boolean = true;

    @Input() activeLabelsID: string[] = [];
    @Input() projectID: string | null = null;
    @Input() sectionID: string | null = null;

    @Output() closeEvent: EventEmitter<any> = new EventEmitter();

    form = this.fb.group({
        name: null,
        description: null,
        priority: 4,
        labelsID: [[]],
        projectID: null,
        sectionID: null
    });

    constructor(
        private fb: UntypedFormBuilder,
        private tasksService: TasksService,
        public projectsQuery: ProjectsQuery,
        public sectionsQuery: SectionsQuery
    ) {}

    ngOnInit(): void {
        this.form.get('name')?.valueChanges.subscribe((value) => (this.addButtonDisabled = !value?.length));

        this.form.patchValue({ labelsID: this.activeLabelsID, projectID: this.projectID, sectionID: this.sectionID });
    }

    resetForm() {
        this.form.patchValue({
            name: null,
            description: null,
            priority: 4,
            labelsID: [[]],
            projectID: this.projectID,
            sectionID: this.sectionID
        });
    }

    setSelected(selected: SelectedProject) {
        this.form.patchValue(selected);
    }

    onCancel() {
        this.resetForm();

        this.closeEvent.emit();
    }

    onSave() {
        // todo : check for form validation
        this.form.value.name && this.tasksService.addTask(this.form.value as AddTaskDTO);

        this.resetForm();

        this.closeEvent.emit();
    }
}

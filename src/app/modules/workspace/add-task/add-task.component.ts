import { TasksService } from '@core/store/tasks/tasks.service';
import { Component, ChangeDetectionStrategy, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { AddTaskDTO } from '@app/core/types/domain/task';

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

    addTaskForm = this.fb.group({
        name: null,
        description: null,
        priority: 4,
        labelsID: [[]],
        projectID: null,
        sectionID: null
    });

    constructor(private fb: UntypedFormBuilder, private tasksService: TasksService) {}

    ngOnInit(): void {
        this.addTaskForm.get('name')?.valueChanges.subscribe((value) => (this.addButtonDisabled = !value?.length));

        this.addTaskForm.patchValue({ labelsID: this.activeLabelsID, projectID: this.projectID, sectionID: this.sectionID });
    }

    resetForm() {
        if (!this.addButtonDisabled) {
            this.addTaskForm.setValue({
                name: null,
                description: null,
                priority: 4,
                labelsID: [[]],
                projectID: null,
                sectionID: null
            });
        }
    }

    onCancel() {
        this.resetForm();

        this.closeEvent.emit();
    }

    onSave() {
        // todo : check for form validation
        this.addTaskForm.value.name && this.tasksService.addTask(this.addTaskForm.value as AddTaskDTO);

        this.resetForm();

        this.closeEvent.emit();
    }
}

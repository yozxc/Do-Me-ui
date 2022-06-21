import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AddTaskData } from '@core/types/addTaskData';

@Component({
    selector: 'app-list-add-task',
    templateUrl: './list-add-task.component.html',
    styleUrls: ['./list-add-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListAddTaskComponent implements OnInit {
    taskEditorActiveState: boolean = false;
    isFocused: boolean = false;
    addButtonDisabled: boolean = true;

    @Output() addTaskEvent: EventEmitter<AddTaskData> = new EventEmitter();

    addTaskForm = this.fb.group({
        taskName: '',
        taskDescription: ''
    });

    // todo : add in form
    priority: number = 4;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.addTaskForm.get('taskName')?.valueChanges.subscribe((value) => (this.addButtonDisabled = !value.length));
    }

    resetForm() {
        if (!this.addButtonDisabled) {
            this.taskEditorActiveState = false;
            this.addTaskForm.setValue({
                taskName: '',
                taskDescription: ''
            });
        }
    }

    changePriority(priority: number) {
        this.priority = priority;
    }

    onCancel() {
        this.taskEditorActiveState = false;

        this.resetForm();
    }

    onSave() {
        this.addTaskForm.value.taskName.length && this.addTaskEvent.emit(this.addTaskForm.value);

        this.resetForm();
    }
}

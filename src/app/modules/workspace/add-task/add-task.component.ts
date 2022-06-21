import { Component, ChangeDetectionStrategy, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddTaskData } from '@app/core/types/addTaskData';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent implements OnInit {
    isFocused: boolean = false;
    addButtonDisabled: boolean = true;

    @Output() addTaskEvent: EventEmitter<AddTaskData> = new EventEmitter();
    @Output() closeEvent: EventEmitter<any> = new EventEmitter();

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
        this.resetForm();

        this.closeEvent.emit();
    }

    onSave() {
        this.addTaskForm.value.taskName.length && this.addTaskEvent.emit(this.addTaskForm.value);
        this.resetForm();

        this.closeEvent.emit();
    }
}

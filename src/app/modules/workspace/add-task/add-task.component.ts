import { Component, ChangeDetectionStrategy, EventEmitter, Output, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { AddTaskData } from '@app/core/types/domain/task';

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
        name: '',
        description: '',
        priority: 4
    });

    constructor(private fb: UntypedFormBuilder) {}

    ngOnInit(): void {
        this.addTaskForm.get('name')?.valueChanges.subscribe((value) => (this.addButtonDisabled = !value.length));
    }

    resetForm() {
        if (!this.addButtonDisabled) {
            this.addTaskForm.setValue({
                name: '',
                description: '',
                priority: 4
            });
        }
    }

    changePriority(priority: number) {
        this.addTaskForm.patchValue({
            priority: priority
        });
    }

    onCancel() {
        this.resetForm();

        this.closeEvent.emit();
    }

    onSave() {
        this.addTaskForm.value.name.length && this.addTaskEvent.emit(this.addTaskForm.value);
        this.resetForm();

        this.closeEvent.emit();
    }
}

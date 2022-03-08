import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-table-add-task',
    templateUrl: './table-add-task.component.html',
    styleUrls: ['./table-add-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableAddTaskComponent {
    addTaskEditor: boolean = false;
    isFocused: boolean = false;

    constructor() {}

    onCancel() {
        this.addTaskEditor = false;
    }
    onSave() {
        this.addTaskEditor = false;
        //
    }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-list-add-task',
    templateUrl: './list-add-task.component.html',
    styleUrls: ['./list-add-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class ListAddTaskComponent {
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

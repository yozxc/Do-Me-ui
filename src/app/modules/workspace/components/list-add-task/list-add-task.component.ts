import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-add-task',
    templateUrl: './list-add-task.component.html',
    styleUrls: ['./list-add-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class ListAddTaskComponent implements OnInit {
    addTaskEditor: boolean = false;
    isFocused: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    onCancel() {
        this.toggleAddTaskEditor(false);
    }
    onSave() {
        this.toggleAddTaskEditor(false);
        //
    }

    toggleAddTaskEditor(toggleTo: boolean) {
        this.addTaskEditor = toggleTo;
    }
}

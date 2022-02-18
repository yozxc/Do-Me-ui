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
        this.addTaskEditor = false;
    }
    onSave() {
        this.addTaskEditor = false;
        //
    }
}

import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-add-task-label',
    templateUrl: './add-task-label.component.html',
    styleUrls: ['./add-task-label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskLabelComponent {
    @Input() text: string = 'Add Task';

    constructor() {}
}

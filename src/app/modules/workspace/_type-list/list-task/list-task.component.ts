import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskData } from '@app/core/types/taskData';
import { v4 } from 'uuid';

@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTaskComponent {
    areControlsVisible: boolean = false;
    checkboxID = v4();

    @Input() taskData!: TaskData;

    constructor() {}
}

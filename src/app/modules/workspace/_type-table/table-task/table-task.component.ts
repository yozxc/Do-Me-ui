import { Component, ChangeDetectionStrategy } from '@angular/core';
import { v4 } from 'uuid';

@Component({
    selector: 'app-table-task',
    templateUrl: './table-task.component.html',
    styleUrls: ['./table-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableTaskComponent {
    isChecked!: boolean;

    checkboxID = v4();
    title: string = 'zxc';

    constructor() {}
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { v4 as uuidv4, v4 } from 'uuid';

@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTaskComponent implements OnInit {
    isChecked!: boolean;
    checkboxID = v4();

    constructor() {}

    ngOnInit(): void {}
}

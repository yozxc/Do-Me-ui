import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todo-main',
    templateUrl: './todo-main.component.html',
    styleUrls: ['./todo-main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoMainComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

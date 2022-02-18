import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayComponent implements OnInit {
    date: number = Date.now();

    constructor() {}

    ngOnInit(): void {}
}

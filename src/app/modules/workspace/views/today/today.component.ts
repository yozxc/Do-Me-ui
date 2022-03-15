import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayComponent {
    date: number = Date.now();

    constructor() {}
}

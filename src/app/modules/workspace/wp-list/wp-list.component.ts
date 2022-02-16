import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-workspace-place',
    templateUrl: './wp-list.component.html',
    styleUrls: ['./wp-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WpListComponent implements OnInit {
    date: number = Date.now();

    constructor() {}

    ngOnInit(): void {}
}

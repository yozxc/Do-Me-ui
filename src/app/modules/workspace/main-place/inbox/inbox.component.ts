import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboxComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

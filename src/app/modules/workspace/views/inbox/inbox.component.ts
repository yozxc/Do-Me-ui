import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InboxComponent {
    __addNoSectionTask: boolean = false;
    type: 'list' | 'table' = 'table';

    constructor() {}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-change-email',
    templateUrl: './change-email.component.html',
    styleUrls: ['./change-email.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeEmailComponent {
    passIsVisible: boolean = false;

    constructor() {}
}

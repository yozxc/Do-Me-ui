import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordPageComponent {
    constructor() {}
}

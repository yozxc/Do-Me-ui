import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-advanced-settings',
    templateUrl: './advanced-settings.component.html',
    styleUrls: ['./advanced-settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedSettingsComponent {
    constructor() {}
}

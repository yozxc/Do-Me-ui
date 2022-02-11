import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-advanced-settings',
    templateUrl: './advanced-settings.component.html',
    styleUrls: ['./advanced-settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedSettingsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

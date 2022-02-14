import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html',
    styleUrls: ['./account-settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSettingsComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    changeEmail() {
        this.router.navigateByUrl('/workspace/(modals:settings/(settingsSpace:changeEmail))');
    }

    changePassword() {
        this.router.navigateByUrl('/workspace/(modals:settings/(settingsSpace:changePassword))');
    }

    deleteAccount() {
        console.log(this.router.url);
        this.router.navigateByUrl('/workspace/(modals:settings/(settingsSpace:deleteAccount))');
    }
}

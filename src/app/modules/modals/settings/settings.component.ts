import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
    title: string = 'Account';

    constructor(private router: Router) {}

    // todo : take care of this
    onClose() {
        console.log(this.router.url);
        console.log(this.router.url.split('//')[0]);
        this.router.navigateByUrl(this.router.url.split('//')[0]);
    }

    changeTitle(title: string) {
        this.title = title;
    }
}

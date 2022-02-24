import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
    title: string = 'Account';

    constructor(private router: Router) {}

    ngOnInit(): void {}

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

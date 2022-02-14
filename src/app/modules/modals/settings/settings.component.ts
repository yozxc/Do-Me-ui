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

    onClose() {
        this.router.navigate([this.router.url]);
    }

    changeTitle(title: string) {
        this.title = title;
    }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent implements OnInit {
    passIsVisible: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    togglePassIsVisible() {
        this.passIsVisible = !this.passIsVisible;
    }
}

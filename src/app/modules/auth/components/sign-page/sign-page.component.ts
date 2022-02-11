import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sign-page',
    templateUrl: './sign-page.component.html',
    styleUrls: ['./sign-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignPageComponent implements OnInit {
    passIsVisible: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    togglePassIsVisible() {
        this.passIsVisible = !this.passIsVisible;
    }
}

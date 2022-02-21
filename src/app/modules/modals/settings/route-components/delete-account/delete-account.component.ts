import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-delete-account',
    templateUrl: './delete-account.component.html',
    styleUrls: ['./delete-account.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteAccountComponent implements OnInit {
    passIsVisible: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}

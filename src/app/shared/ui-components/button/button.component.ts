import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
        <button [class]="styleCls" [ngClass]="{ disabled }">
            <ng-content></ng-content>
        </button>

        <!-- todo :  change [disabled]="true" -->
    `,
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
    @Input() styleCls = 'black';
    @Input() disabled = false;

    constructor() {}

    ngOnInit(): void {}
}

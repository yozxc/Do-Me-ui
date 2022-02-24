import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ui-button',
    template: `
        <button (click)="clickEvent.emit()" [class]="styleCls" [ngClass]="{ disabled }">
            <ng-content></ng-content>
        </button>
    `,
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
    @Input() styleCls = 'black';
    @Input() disabled = false;

    @Output() clickEvent: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}

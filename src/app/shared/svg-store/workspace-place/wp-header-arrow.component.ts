import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'svg-wp-header-arrow',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                stroke: #d1453b;
                border-radius: 3px;
                cursor: pointer;

                fill: #808080;

                transform: rotate(-90deg) translate(50%, 0);

                &._active {
                    transform: translate(0, -50%);
                }
                &:hover {
                    background-color: #ececec;
                }
            }
        `
    ],
    template: `
        <svg [ngClass]="{ _active: !isClosed }" (click)="clickEvent.emit()">
            <path fill="none" stroke="currentColor" d="M16 10l-4 4-4-4"></path>
        </svg>
    `
})
export class WpHeaderArrowComponent {
    @Input() isClosed!: boolean | null;

    @Output() clickEvent: EventEmitter<any> = new EventEmitter();

    constructor() {}
}

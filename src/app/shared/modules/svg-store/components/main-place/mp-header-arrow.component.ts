import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-mp-header-arrow',
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

                &.active {
                    transform: translate(0, -50%);
                }
                &:hover {
                    background-color: #ececec;
                }
            }
        `,
    ],
    template: `
        <svg [ngClass]="{ active: !isClosed }" (click)="onClickEvent.emit()">
            <path fill="none" stroke="currentColor" d="M16 10l-4 4-4-4"></path>
        </svg>
    `,
})
export class MpHeaderArrowComponent implements OnInit {
    @Input() isClosed!: boolean | null;

    @Output() onClickEvent: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}

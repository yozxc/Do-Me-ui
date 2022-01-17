import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-mp-header-arrow',
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
        <svg [ngClass]="{ active: _isActive }" (click)="toggleIsActive()">
            <path fill="none" stroke="currentColor" d="M16 10l-4 4-4-4"></path>
        </svg>
    `,
})
export class MpHeaderArrowComponent implements OnInit {
    @Input() toggleIsActive: any;
    @Input() _isActive: boolean = true;

    constructor() {}

    ngOnInit(): void {}
}

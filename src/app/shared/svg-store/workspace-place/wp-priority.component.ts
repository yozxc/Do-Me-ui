import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-wp-priority',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;
                border-radius: 3px;

                fill: #808080;

                cursor: pointer;
                &:hover {
                    background-color: #ececec;
                    fill: black;
                }
            }
        `
    ],
    template: `
        <svg>
            <g [attr.fill]="prior === 1 ? '#DE4C4A' : prior === 2 ? '#F49C18' : prior === 3 ? '#4073D6' : '#808080'">
                <path d="M5 5.5L6 5v14.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-14z"></path>
                <path
                    [attr.stroke]="
                        prior === 1 ? '#DE4C4A' : prior === 2 ? '#F49C18' : prior === 3 ? '#4073D6' : '#808080'
                    "
                    [attr.fill]="prior === 4 && '#fff'"
                    d="M5.5 13.58s2.42-1.32 6.5.02 7.5.03 7.5.03l-.02-7.95c.01-.05-3.4 1.26-7.48-.08s-6.5-.02-6.5-.02v7.93"
                ></path>
            </g>
        </svg>
    `
})
export class WpPriorityComponent {
    @Input() styleCls = '';
    // todo :
    @Input() prior?: number = 4;

    constructor() {}
}

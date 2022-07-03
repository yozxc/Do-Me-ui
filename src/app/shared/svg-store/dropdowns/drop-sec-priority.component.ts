import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PriorityType } from '@app/core/types/priorityType';

@Component({
    selector: 'svg-drop-sec-priority',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;
            }

            @import 'vars';
            :host {
                position: relative;
                &:hover .description {
                    visibility: visible;
                }
            }
            .description {
                position: absolute;
                bottom: -35px;
                left: 50%;
                transform: translate(-50%);
                z-index: 99;

                padding: 4px 6px;
                background-color: #3d3d3d;
                color: #fafafa;
                border-radius: 3px;

                font-size: 0.8em;
                font-family: $gFont;
                font-weight: 500;
                white-space: nowrap;

                visibility: hidden;
            }
        `
    ],
    template: `
        <svg width="24" height="24">
            <g [attr.fill]="prior === 1 ? '#DE4C4A' : prior === 2 ? '#F49C18' : prior === 3 ? '#4073D6' : '#808080'">
                <path d="M5 5.5L6 5v14.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-14z"></path>
                <path
                    [attr.stroke]="prior === 1 ? '#DE4C4A' : prior === 2 ? '#F49C18' : prior === 3 ? '#4073D6' : '#808080'"
                    [attr.fill]="prior === 4 && '#fff'"
                    d="M5.5 13.58s2.42-1.32 6.5.02 7.5.03 7.5.03l-.02-7.95c.01-.05-3.4 1.26-7.48-.08s-6.5-.02-6.5-.02v7.93"
                ></path>
            </g>
        </svg>

        <div *ngIf="_description" class="description">Priority {{ prior }}</div>
    `
})
export class SvgDropSecPriorityComponent {
    @Input() prior!: PriorityType;
    @Input() _description: boolean = true;

    constructor() {}
}

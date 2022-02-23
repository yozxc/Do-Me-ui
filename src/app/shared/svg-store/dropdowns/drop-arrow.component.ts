import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-arrow',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                fill: #808080;
            }
        `,
    ],
    template: `
        <svg>
            <g fill="none" fill-rule="evenodd">
                <path stroke="#808080" stroke-linecap="round" stroke-linejoin="round" d="M16 10l-4 4-4-4"></path>
            </g>
        </svg>
    `,
})
export class SvgDropArrowComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

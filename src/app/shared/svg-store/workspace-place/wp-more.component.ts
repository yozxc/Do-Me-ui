import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'svg-wp-more',
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
        <svg class="more" stroke="#808080">
            <g fill="none" stroke-linecap="round" transform="translate(3 10)">
                <circle cx="2" cy="2" r="2"></circle>
                <circle cx="9" cy="2" r="2"></circle>
                <circle cx="16" cy="2" r="2"></circle>
            </g>
        </svg>
    `,
})
export class WpMoreComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-move-to',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    template: `
        <svg>
            <g fill="none" transform="translate(4 4)">
                <circle cx="8" cy="8" r="7.5" stroke="#888"></circle>
                <path
                    fill="#888"
                    d="M10.11 7.82L8.15 5.85a.5.5 0 1 1 .7-.7l2.83 2.82a.5.5 0 0 1 0 .71l-2.83 2.83a.5.5 0 1 1-.7-.7l1.98-1.99H4.5a.5.5 0 1 1 0-1h5.61z"
                ></path>
            </g>
        </svg>
    `,
})
export class SvgDropMoveToComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

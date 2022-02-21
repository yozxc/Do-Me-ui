import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-archive',
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
            <g fill="none" fill-rule="evenodd">
                <path
                    stroke="#888"
                    d="M5.5 9.5V18A1.5 1.5 0 0 0 7 19.5h10a1.5 1.5 0 0 0 1.5-1.5V9.5h-13zm-1 0h15V7A1.5 1.5 0 0 0 18 5.5H6A1.5 1.5 0 0 0 4.5 7v2.5z"
                ></path>
                <rect width="6" height="1" x="9" y="12" fill="#888" rx=".5"></rect>
            </g>
        </svg>
    `,
})
export class SvgDropArchiveComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

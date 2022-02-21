import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-sec-today',
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
        <svg viewBox="0 0 28 28">
            <g fill="#058527" fill-rule="nonzero">
                <path d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z" opacity=".1"></path>
                <path
                    d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-.5 4a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1z"
                ></path>
                <text
                    font-family="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                    font-size="11"
                    transform="translate(4 2)"
                    font-weight="500"
                >
                    <tspan x="9.5" y="18" text-anchor="middle">{{ date | date: 'd' }}</tspan>
                </text>
            </g>
        </svg>
    `,
})
export class SvgDropSecTodayComponent implements OnInit {
    date = Date.now();

    constructor() {}

    ngOnInit(): void {}
}

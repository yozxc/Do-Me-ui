import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-sec-this-weekend',
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
            <path
                fill="#246FE0"
                d="M19.3 6c2 0 3.7 1.6 3.7 3.7V11a2.5 2.5 0 013 2.4v5c0 1.4-1 2.5-2.4 2.5H21v.5a.5.5 0 01-1 0V21H8v.5a.5.5 0 01-1 0V21H4.5A2.5 2.5 0 012 18.5v-5a2.5 2.5 0 013-2.4V9.7C5 7.7 6.6 6 8.7 6h10.6zm4.2 6c-.8 0-1.4.6-1.5 1.4V17H6v-3.5a1.5 1.5 0 00-3-.1v5.1c0 .8.6 1.4 1.4 1.5h19.1c.8 0 1.4-.6 1.5-1.3v-5.2c0-.8-.7-1.5-1.5-1.5zm-4.2-5H8.7A2.7 2.7 0 006 9.5v2c.6.5 1 1.2 1 2V16h14v-2.5c0-.8.4-1.5 1-2V9.7C22 8.3 20.9 7 19.5 7h-.2z"
            ></path>
        </svg>
    `,
})
export class SvgDropSecThisWeekendComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

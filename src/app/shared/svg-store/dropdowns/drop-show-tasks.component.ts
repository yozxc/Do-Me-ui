import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-show-tasks',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                fill: #888;
            }
        `,
    ],
    template: `
        <svg viewBox="0 0 24 24">
            <path
                d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-1a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.9-11.4a.5.5 0 0 1 .7.8l-6 6a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 0 1 .7-.8l2.1 2.2L16 8.6z"
            ></path>
        </svg>
    `,
})
export class SvgDropShowTasksComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

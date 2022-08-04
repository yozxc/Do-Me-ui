import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-mo-lm-account',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                fill: #6e6e6e;

                height: 100%;
                width: 100%;
            }
        `
    ],
    template: `
        <svg aria-hidden="true">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 12a8.96 8.96 0 001.778 5.372A8.987 8.987 0 0012 21a8.981 8.981 0 007.222-3.628A9 9 0 103 12zm9 3c2.747 0 5.259.472 6.562 1.577a8 8 0 10-13.124 0C6.74 15.472 9.253 15 12 15zm5.94 2.36A7.98 7.98 0 0112 20a7.98 7.98 0 01-5.94-2.64C7.022 16.518 9.18 16 12 16c2.82 0 4.978.519 5.94 1.36zM12 14a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5zm2.75-3.75a2.75 2.75 0 11-5.5 0 2.75 2.75 0 015.5 0z"
            ></path>
        </svg>
    `
})
export class MoLmAccountComponent {
    constructor() {}
}

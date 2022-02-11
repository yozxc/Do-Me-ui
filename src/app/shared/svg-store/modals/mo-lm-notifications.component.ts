import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-mo-lm-notifications',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                fill: #6e6e6e;

                height: 100%;
                width: 100%;
            }
        `,
    ],
    template: `
        <svg aria-hidden="true">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.475 19a1.5 1.5 0 01-1.254-2.323C5.568 14.625 6.25 11.989 6.25 8.75a5.75 5.75 0 1111.5 0c0 3.24.682 5.875 2.03 7.927A1.5 1.5 0 0118.524 19H14.5a2.5 2.5 0 01-5 0H5.475zM12 20.5a1.5 1.5 0 001.5-1.5h-3a1.5 1.5 0 001.5 1.5zm7.025-3a.5.5 0 01-.5.5H5.475a.5.5 0 01-.418-.774C6.519 14.998 7.25 12.172 7.25 8.75a4.75 4.75 0 019.5 0c0 3.423.731 6.249 2.193 8.476a.5.5 0 01.082.274z"
            ></path>
        </svg>
    `,
})
export class MoLmNotificationsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

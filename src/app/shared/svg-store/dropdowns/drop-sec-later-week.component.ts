import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-drop-sec-later-week',
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
        <svg>
            <path d="M6 3.5h16c1.4 0 2.5 1.1 2.5 2.5v2.5h-21V6c0-1.4 1.1-2.5 2.5-2.5z" opacity="0.1"></path>
            <path
                fill="#723BC6"
                d="M22 3a3 3 0 013 3v16a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h16zm0 1H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-3 14a1 1 0 110 2 1 1 0 010-2zm2.5-10a.5.5 0 010 1h-15a.5.5 0 010-1z"
            ></path>
        </svg>

        <div class="description">Later this week</div>
    `
})
export class SvgDropSecLaterWeekComponent {
    date = Date.now();

    constructor() {}
}

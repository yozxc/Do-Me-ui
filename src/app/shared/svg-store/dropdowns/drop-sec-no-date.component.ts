import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-sec-no-date',
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
        `,
    ],
    template: `
        <svg viewBox="0 0 24 24">
            <path
                fill="#808080"
                fill-rule="nonzero"
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
            ></path>
        </svg>

        <div class="description">No Date</div>
    `,
})
export class SvgDropSecNoDateComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

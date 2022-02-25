import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-lm-plus',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                fill: #aaa;

                padding: 4px;
                border-radius: 3px;
                width: 22px;
                height: 22px;

                background-color: rgba(236, 236, 236, 0);
                transition: 0.15s;
                opacity: 0;

                &:hover {
                    background-color: rgba(236, 236, 236, 1);
                    fill: black;
                    opacity: 1;
                }
            }
        `
    ],
    template: `
        <svg>
            <path
                d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
                fill-rule="evenodd"
            ></path>
        </svg>
    `
})
export class LmPlusComponent {
    constructor() {}
}

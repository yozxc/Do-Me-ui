import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-wp-task-add',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                height: calc(13px + 3px * 2);
                width: calc(13px + 3px * 2);

                fill: #808080;

                padding: 3px;
            }
        `
    ],
    template: `
        <svg class="pltla__icon">
            <path
                d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
                ill-rule="evenodd"
            ></path>
        </svg>
    `
})
export class WpTaskAddComponent {
    constructor() {}
}

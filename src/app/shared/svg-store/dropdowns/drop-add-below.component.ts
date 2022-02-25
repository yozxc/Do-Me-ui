import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-drop-add-below',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                fill: #888;
            }
        `
    ],
    template: `
        <svg>
            <path
                fill-rule="evenodd"
                d="M9 17.26L6.35 14.6a.5.5 0 0 0-.7.7l3.53 3.54a.5.5 0 0 0 .7 0l3.55-3.53a.5.5 0 0 0-.71-.7L10 17.31V5.5a.5.5 0 1 0-1 0v11.76zM17 9h2.5a.5.5 0 1 0 0-1H17V5.5a.5.5 0 1 0-1 0V8h-2.5a.5.5 0 1 0 0 1H16v2.5a.5.5 0 1 0 1 0V9z"
            ></path>
        </svg>
    `
})
export class SvgDropAddBelowComponent {
    constructor() {}
}

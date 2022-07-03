import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-drop-go-to',
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
                d="M10 11.5c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm0-8c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm-4 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            ></path>
        </svg>
    `
})
export class SvgDropGoToComponent {
    constructor() {}
}

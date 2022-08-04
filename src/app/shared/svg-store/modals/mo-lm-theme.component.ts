import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-mo-lm-theme',
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
                d="M13.5 18.75C14 19.875 14.5 21 16 21c3 0 5-4 5-9s-4.03-9-9-9a9 9 0 00-9 9c0 7.418 2.751 6.307 5.397 5.238.92-.371 1.828-.738 2.603-.738 1.5 0 2 1.125 2.5 2.25zM20 12c0 4.664-1.796 8-4 8-.716 0-.985-.303-1.586-1.656-.899-2.022-1.63-2.844-3.414-2.844-.835 0-1.459.198-3.017.827l-.252.102c-1.478.59-2.188.714-2.622.453C4.453 16.49 4 15 4 12a8 8 0 018-8c4.429 0 8 3.563 8 8zm-2 3.5a1 1 0 11-2 0 1 1 0 012 0zm-.5-3a1 1 0 100-2 1 1 0 000 2zM16.75 8a1 1 0 11-2 0 1 1 0 012 0zM12 7.5a1 1 0 100-2 1 1 0 000 2zM9.25 8a1 1 0 11-2 0 1 1 0 012 0zM6.5 12.5a1 1 0 100-2 1 1 0 000 2z"
            ></path>
        </svg>
    `
})
export class MoLmThemeComponent {
    constructor() {}
}

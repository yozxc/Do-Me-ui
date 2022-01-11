import { Component, Input } from '@angular/core';

@Component({
    selector: 'svg-header-menu',
    styles: [
        `
            svg {
                width: 24px;
                height: 24px;

                fill: #fff;

                display: flex;
                align-items: center;
            }
        `,
    ],
    template: ` <svg viewBox="0 0 24 24">
        <path
            fill-rule="evenodd"
            d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"
        ></path>
    </svg>`,
})
export class HeaderMenuComponent {
    @Input() styleClass: string = '';

    constructor() {}
}

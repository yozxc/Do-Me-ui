import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-search-loupe',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 24px;
                height: 24px;
                fill: #fff;
            }
        `,
    ],
    template: ` <svg [class]="styleCls">
        <path
            d="M10.5 3a7.5 7.5 0 015.645 12.438l4.709 4.708a.502.502 0 01-.708.708l-4.708-4.709A7.5 7.5 0 1110.5 3zm0 1a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
        ></path>
    </svg>`,
})
export class SearchLoupeComponent {
    @Input() styleCls: string = '';

    constructor() {}
}

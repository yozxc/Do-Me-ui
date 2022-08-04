import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-wp-tick',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                fill: #808080;
                &.fill__white {
                    fill: #fff;
                }
            }
        `
    ],
    template: `
        <svg [ngClass]="{ fill__white: activeWhite }">
            <path
                d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
            ></path>
        </svg>
    `
})
export class WpTickComponent {
    @Input() activeWhite?: boolean = false;

    constructor() {}
}

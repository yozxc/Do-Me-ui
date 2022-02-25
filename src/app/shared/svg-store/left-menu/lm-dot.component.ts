import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-lm-dot',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;
            }
        `
    ],
    template: `
        <svg [class]="styleCls" viewBox="0 0 24 24">
            <path d="M12 7a5 5 0 110 10 5 5 0 010-10z"></path>
        </svg>
    `
})
export class LmDotComponent {
    @Input() styleCls: string = 'gray';

    constructor() {}
}

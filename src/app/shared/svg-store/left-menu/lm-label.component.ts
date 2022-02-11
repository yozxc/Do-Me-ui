import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'svg-lm-label',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    template: `
        <svg [class]="styleCls" viewBox="0 0 24 24">
            <path
                fill-rule="nonzero"
                d="M5.914 11.086l4.5-4.5A2 2 0 0 1 11.828 6H16a2 2 0 0 1 2 2v4.172a2 2 0 0 1-.586 1.414l-4.5 4.5a2 2 0 0 1-2.828 0l-4.172-4.172a2 2 0 0 1 0-2.828zM14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            ></path>
        </svg>
    `,
})
export class LmLabelComponent implements OnInit {
    @Input() styleCls: string = 'gray';

    constructor() {}

    ngOnInit(): void {}
}

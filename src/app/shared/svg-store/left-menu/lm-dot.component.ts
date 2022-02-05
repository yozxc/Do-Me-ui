import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-lm-dot',
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
            <path d="M12 7a5 5 0 110 10 5 5 0 010-10z"></path>
        </svg>
    `,
})
export class LmDotComponent implements OnInit {
    @Input() styleCls: string = 'gray';

    constructor() {}

    ngOnInit(): void {}
}

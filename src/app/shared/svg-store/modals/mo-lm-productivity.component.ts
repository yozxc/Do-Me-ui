import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-mo-lm-productivity',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                fill: #6e6e6e;
            }

            .mo_lm__icon {
                height: 24px;
                width: 24px;
            }
        `,
    ],
    template: `
        <svg [class]="styleCls" aria-hidden="true">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm17 0a8 8 0 01-15.382 3.089L7.5 12.207l2.646 2.647a.5.5 0 00.708 0L16 9.707V12a.5.5 0 001 0V8.5v-.003A.5.5 0 0016.5 8H13a.5.5 0 000 1h2.293L10.5 13.793l-2.646-2.647a.5.5 0 00-.708 0L4.26 14.032A8 8 0 1120 12z"
            ></path>
        </svg>
    `,
})
export class MoLmProductivityComponent implements OnInit {
    @Input() styleCls = '';

    constructor() {}

    ngOnInit(): void {}
}

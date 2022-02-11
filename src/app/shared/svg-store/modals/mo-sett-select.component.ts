import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-mo-sett-select',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                fill: #6e6e6e;

                height: 16px;
                width: 16px;
            }
        `,
    ],
    template: `
        <svg fill="none" aria-hidden="true">
            <path
                d="M11.646 5.646a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L8 9.293l3.646-3.647z"
            ></path>
        </svg>
    `,
})
export class MoSettSelectComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

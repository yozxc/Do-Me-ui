import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-wp-label',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;
                border-radius: 3px;

                fill: #808080;

                cursor: pointer;
                &:hover {
                    background-color: #ececec;
                    fill: black;
                }
            }
        `,
    ],
    template: `
        <svg [class]="styleCls" viewBox="0 0 24 24">
            <path
                fill-rule="nonzero"
                d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
            ></path>
        </svg>
    `,
})
export class WpLabelComponent implements OnInit {
    @Input() styleCls = '';

    constructor() {}

    ngOnInit(): void {}
}

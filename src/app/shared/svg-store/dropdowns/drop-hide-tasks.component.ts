import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-hide-tasks',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                fill: #888;
            }
        `,
    ],
    template: `
        <svg>
            <path
                fill-rule="nonzero"
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
            ></path>
        </svg>
    `,
})
export class SvgDropHideTasksComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

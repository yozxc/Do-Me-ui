import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'svg-drop-add-above',
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
                fill-rule="evenodd"
                d="M9 6.74L6.35 9.4a.5.5 0 0 1-.7-.7l3.53-3.54a.5.5 0 0 1 .7 0l3.55 3.53a.5.5 0 0 1-.71.7L10 6.69V18.5a.5.5 0 1 1-1 0V6.74zM17 15h2.5a.5.5 0 1 1 0 1H17v2.5a.5.5 0 1 1-1 0V16h-2.5a.5.5 0 1 1 0-1H16v-2.5a.5.5 0 1 1 1 0V15z"
            ></path>
        </svg>
    `,
})
export class SvgDropAddAboveComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

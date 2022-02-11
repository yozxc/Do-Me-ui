import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'svg-lm-drag',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                fill: #aaa;

                cursor: move;
                opacity: 0;

                &:hover {
                    fill: #202020;
                }
            }
        `,
    ],
    template: `
        <svg class="menu__proj__drag">
            <path
                fill-rule="evenodd"
                d="M9.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            ></path>
        </svg>
    `,
})
export class LmDragComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

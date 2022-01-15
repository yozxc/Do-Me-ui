import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mp-task-more',
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;
                fill: #808080;

                cursor: pointer;

                &:hover {
                    background-color: #ececec;
                    fill: black;
                }
            }

            .pltmi__more {
                transform: translate(18%, 45%);
            }
        `,
    ],
    template: `
        <svg>
            <path
                class="pltmi__more"
                d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                fill-rule="evenodd"
            ></path>
        </svg>
    `,
})
export class MpTaskMoreComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

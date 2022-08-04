import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-mo-lm-backups',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                fill: #6e6e6e;

                height: 100%;
                width: 100%;
            }
        `
    ],
    template: `
        <svg aria-hidden="true">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.25 18a3.75 3.75 0 01-1.243-7.29 3 3 0 013.81-3.098 5.5 5.5 0 0110.178 3.1A3.751 3.751 0 0117.751 18H14v-1h3.75a2.75 2.75 0 00.914-5.345l-.695-.245.028-.736L18 10.5a4.5 4.5 0 00-8.331-2.361l-.397.641-.726-.205a2.002 2.002 0 00-2.541 2.067l.053.76-.72.252A2.751 2.751 0 006.25 17H11v1H6.25zM13 11.707V20.5a.5.5 0 01-1 0v-8.793l-1.646 1.647a.5.5 0 01-.708-.708l2.5-2.5a.5.5 0 01.708 0l2.5 2.5a.5.5 0 01-.708.708L13 11.707z"
            ></path>
        </svg>
    `
})
export class MoLmBackupsComponent {
    constructor() {}
}

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-mo-lm-reminders',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                fill: #6e6e6e;

                height: 100%;
                width: 100%;
            }
        `,
    ],
    template: `
        <svg aria-hidden="true">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.854 5.354a1.974 1.974 0 00-.272 2.453.5.5 0 11-.843.538 2.974 2.974 0 014.106-4.106.5.5 0 01-.536.843 1.976 1.976 0 00-2.455.272zm11.839-.272a1.974 1.974 0 012.725 2.727.5.5 0 10.844.536 2.976 2.976 0 00-4.107-4.106.5.5 0 10.538.843zm.245 13.063A7.47 7.47 0 0112 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 11-.708-.708l1.709-1.708a7.5 7.5 0 1111.29 0l1.709 1.708a.5.5 0 11-.708.707l-1.708-1.708zM12 19a6.5 6.5 0 110-13 6.5 6.5 0 010 13zm0-11v4h2.5a.5.5 0 010 1h-3a.5.5 0 01-.5-.5V8a.5.5 0 111 0z"
            ></path>
        </svg>
    `,
})
export class MoLmRemindersComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

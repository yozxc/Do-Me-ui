import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-mp-schedule',
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    template: `
        <svg [class]="styleCls" viewBox="0 0 16 16">
            <path
                fill-rule="nonzero"
                d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"
            ></path>
        </svg>
    `,
})
export class MpScheduleComponent implements OnInit {
    @Input() styleCls = '';

    constructor() {}

    ngOnInit(): void {}
}

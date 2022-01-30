import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mp-task-schedule',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
        `,
    ],
    template: `
        <svg viewBox="0 0 24 24" data-reach-tooltip-trigger="">
            <path
                fill-rule="nonzero"
                d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"
            ></path>
        </svg>
    `,
})
export class MpTaskScheduleComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

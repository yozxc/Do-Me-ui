import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'svg-add-task-section',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 100%;
                height: 100%;

                fill: #808080;
            }
        `
    ],
    template: `
        <svg viewBox="0 0 24 24">
            <path
                fill-rule="nonzero"
                d="M17.5 20c.276 0 .5.224.5.5s-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11zM16 8c1.105 0 2 .895 2 2v5c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-5c0-1.105.895-2 2-2h8zm0 1H8c-.513 0-.936.386-.993.883L7 10v5c0 .513.386.936.883.993L8 16h8c.513 0 .936-.386.993-.883L17 15v-5c0-.513-.386-.936-.883-.993L16 9zm1.5-5c.276 0 .5.224.5.5s-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11z"
            ></path>
        </svg>
    `
})
export class SvgAddTaskSectionComponent {
    constructor() {}
}

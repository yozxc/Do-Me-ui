import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'svg-header-add',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            svg {
                width: 24px;
                height: 24px;

                fill: #fff;

                display: flex;
                align-items: center;
            }
        `
    ],
    template: ` <svg viewBox="0 0 24 24">
        <g fill-rule="evenodd" transform="translate(4 3)">
            <mask id="jd4FBg" fill="#fff">
                <path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"></path>
            </mask>
            <g mask="url(#jd4FBg)">
                <path d="M-4-3h24v24H-4z"></path>
            </g>
        </g>
    </svg>`
})
export class HeaderAddComponent {
    @Input() styleClass: string = '';

    constructor() {}
}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-st-tangerine',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            @import 'vars';
            :host {
                margin: 5px;
            }

            svg {
                width: 100%;
                height: 100%;
                padding: 3px 5px;

                border: 1px solid #e6e6e6;
                border-radius: 5px;

                cursor: pointer;
                transition: 0.1s;
                &:hover {
                    transform: translate(0, -5%);
                    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
                }
            }

            text {
                font-family: $gFont;
                user-select: none;
            }
        `,
    ],
    template: `
        <svg
            xml:space="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="166"
            height="77"
            viewBox="0 0 166 77"
            fill="#ff9000"
        >
            <defs><rect id="a" width="164" height="75" rx="3" fill="#FFF"></rect></defs>
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)">
                    <mask id="b" fill="#fff"><use xlink:href="#a"></use></mask>
                    <rect x="-.5" y="-.5" width="165" height="76" rx="4" fill="#fff"></rect>
                    <path fill="#ff9000" mask="url(#b)" d="M0 0h164v30H0z"></path>
                    <text mask="url(#b)" font-size="12" fill="#fff"><tspan x="7" y="20">Tangerine</tspan></text>
                    <path
                        d="M11 43a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm11.3-7h47.4l.8.1.4.4.1.8v3.4l-.1.8-.4.4-.8.1H22.3l-.8-.1a1 1 0 0 1-.4-.4l-.1-.8v-3.4l.1-.8.4-.4.8-.1zm58 0h74.4l.8.1.4.4.1.8v3.4l-.1.8-.4.4-.8.1H80.3l-.8-.1a1 1 0 0 1-.4-.4l-.1-.8v-3.4l.1-.8.4-.4.8-.1zm-58 12h23.4l.8.1.4.4.1.8v3.4l-.1.8-.4.4-.8.1H22.3l-.8-.1a1 1 0 0 1-.4-.4l-.1-.8v-3.4l.1-.8.4-.4.8-.1zm34 0h62.4l.8.1.4.4.1.8v3.4l-.1.8-.4.4-.8.1H56.3l-.8-.1a1 1 0 0 1-.4-.4l-.1-.8v-3.4l.1-.8.4-.4.8-.1zM11 56a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                        fill="#e6e6e6"
                        fill-rule="nonzero"
                        mask="url(#b)"
                    ></path>
                    <rect fill="#ff9000" mask="url(#b)" x="7" y="62" width="26" height="6" rx="1"></rect>
                </g>
                <path
                    *ngIf="isActive"
                    d="M149.2 67l-4.1-4.1a.5.5 0 0 0-.7 0c-.2.2-.2.5 0 .7l4.8 4.9 8.5-8.4c.2-.2.2-.6 0-.7a.5.5 0 0 0-.7 0l-7.8 7.7z"
                    fill="#ff9000"
                ></path>
            </g>
        </svg>
    `,
})
export class StTangerineComponent implements OnInit {
    @Input() isActive: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}

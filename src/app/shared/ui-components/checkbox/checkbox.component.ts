import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { v4 } from 'uuid';

@Component({
    selector: 'ui-checkbox',
    template: `
        <input [id]="id" type="checkbox" class="switch" [checked]="checked" />
        <label *ngIf="label" [for]="id" class="label" (click)="$event.stopPropagation()">{{ label }}</label>
    `,
    styleUrls: ['./checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
    id: string = v4();

    @Input() label?: string;
    @Input() checked?: boolean = false;

    constructor() {}
}

import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { v4 } from 'uuid';

@Component({
    selector: 'ui-checkbox',
    template: ` <div (click)="checkEventForm()">
        <input [id]="id" type="checkbox" class="switch" [checked]="checked" />
        <label *ngIf="label" [for]="id" class="label" (click)="$event.stopPropagation()">{{ label }}</label>
    </div>`,
    styleUrls: ['./checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true
        }
    ]
})
export class CheckboxComponent implements ControlValueAccessor {
    id: string = v4();

    @Input() label?: string;
    @Input() checked: boolean = false;

    @Output() checkEvent: EventEmitter<boolean> = new EventEmitter();

    private onChange!: (value: boolean) => void;
    private onTouched!: () => void;

    constructor() {}

    checkEventForm() {
        this.checked = !this.checked;
        this.onChange(this.checked);
        this.checkEvent.emit(this.checked);
    }

    writeValue(): void {
        // this.cdr.detectChanges();
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}

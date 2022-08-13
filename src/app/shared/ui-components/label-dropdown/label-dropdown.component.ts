import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LabelsQuery } from '@core/store/labels/labels.query';

@Component({
    selector: 'ui-label-dropdown',
    templateUrl: './label-dropdown.component.html',
    styleUrls: ['./label-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LabelDropdownComponent),
            multi: true
        }
    ]
})
export class LabelDropdownComponent implements ControlValueAccessor {
    isVisible: boolean = false;

    @Input() activeLabelsID: string[] = [];
    @Output() closeEvent: EventEmitter<any> = new EventEmitter();

    private onChange!: (value: string[]) => void;
    private onTouched!: () => void;

    constructor(private cdr: ChangeDetectorRef, private render: Renderer2, public labelsQuery: LabelsQuery) {}

    toggleIsVisible() {
        this.isVisible = !this.isVisible;
        this.cdr.detectChanges();
    }

    close() {
        this.isVisible = false;
        this.onChange(this.activeLabelsID);
        this.closeEvent.emit();
    }

    checkActiveID(id: string) {
        return this.activeLabelsID.includes(id);
    }

    setID(id: string) {
        const index = this.activeLabelsID.indexOf(id);
        index !== -1 ? this.activeLabelsID.splice(index, 1) : this.activeLabelsID.push(id);

        this.onChange(this.activeLabelsID);
    }

    writeValue(): void {}

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}

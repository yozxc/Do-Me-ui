import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PriorityType } from '@app/core/types/domain/priority';

@Component({
    selector: 'ui-priority-dropdown',
    templateUrl: './priority-dropdown.component.html',
    styleUrls: ['./priority-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PriorityDropdownComponent),
            multi: true
        }
    ]
})
export class PriorityDropdownComponent implements ControlValueAccessor {
    isVisible: boolean = false;

    priorityList: PriorityType[] = [1, 2, 3, 4];

    @Input() priority: PriorityType = 4;

    @Output() closeEvent: EventEmitter<any> = new EventEmitter();
    @Output() changePriorityEvent: EventEmitter<any> = new EventEmitter();

    private onChange!: (value: PriorityType) => void;
    private onTouched!: () => void;

    constructor(private cdr: ChangeDetectorRef, private render: Renderer2) {}

    toggleIsVisible() {
        this.isVisible = !this.isVisible;
        this.cdr.detectChanges();
    }

    changePriority(p: PriorityType) {
        this.priority = p;
        this.changePriorityEvent.emit(p);
        this.onChange(this.priority);
        this.close();
    }

    close() {
        this.isVisible = false;
        this.closeEvent.emit();
    }

    writeValue(): void {}

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}

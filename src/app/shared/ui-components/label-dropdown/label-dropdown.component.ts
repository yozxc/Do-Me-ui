import {
    Component,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    EventEmitter,
    Output,
    AfterViewChecked,
    ElementRef,
    ViewChild,
    Input,
    Renderer2,
    forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
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
export class LabelDropdownComponent implements AfterViewChecked, ControlValueAccessor {
    isVisible: boolean = false;

    @Input() activeLabelsID: string[] = [];
    @Output() closeEvent: EventEmitter<any> = new EventEmitter();

    @ViewChild('menuView') menuView?: ElementRef;

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

    //

    // this is setting menu to be visible in viewport
    ngAfterViewChecked(): void {
        if (!this.menuView) return;

        const element = this.menuView.nativeElement;
        const coordinates = this.menuView.nativeElement.getBoundingClientRect();

        if (coordinates.bottom > window.innerHeight) {
            this.render.setStyle(element, 'top', `calc(50% - ${coordinates.bottom - window.innerHeight + 5}px)`);
        }
        if (coordinates.top < 0) {
            this.render.setStyle(element, 'top', `calc(50% + ${coordinates.top * -1 + 5}px)`);
        }
        if (coordinates.left < 0) {
            this.render.setStyle(element, 'left', `calc(50% + ${coordinates.left * -1 + 5}px)`);
        }
        if (coordinates.right > window.innerWidth) {
            this.render.setStyle(element, 'left', `calc(50% - ${coordinates.right - window.innerWidth + 5}px)`);
        }
    }
}

import { Component, OnInit, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ColorType } from '@app/core/types/color';

@Component({
    selector: 'ui-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ColorPickerComponent),
            multi: true
        }
    ]
})
export class ColorPickerComponent implements ControlValueAccessor {
    __currentColor: ColorType = 'berryRed';
    __isColorListActive: boolean = false;

    colors = colors;

    private onChange!: (value: ColorType) => void;
    private onTouched!: () => void;

    constructor(private cdr: ChangeDetectorRef) {}

    getColorDataByType(colorType: ColorType) {
        return this.colors.find((el) => el.colorType === colorType);
    }

    setCurrentColor(color: any) {
        this.__currentColor = color.colorType;
        this.__isColorListActive = false;

        this.onChange(this.__currentColor);
    }

    writeValue(colorType: ColorType): void {
        // this.cdr.detectChanges();
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}

// todo : check for insert into service/interface
const colors = [
    { name: 'Berry Red', styleCls: 'bg-berryRed', colorType: 'berryRed' },
    { name: 'Red', styleCls: 'bg-red', colorType: 'red' },
    { name: 'Orange', styleCls: 'bg-orange', colorType: 'orange' },
    { name: 'Yellow', styleCls: 'bg-yellow', colorType: 'yellow' },
    { name: 'Olive Green', styleCls: 'bg-oliveGreen', colorType: 'oliveGreen' },
    { name: 'Lime Green', styleCls: 'bg-limeGreen', colorType: 'limeGreen' },
    { name: 'Green', styleCls: 'bg-green', colorType: 'green' },
    { name: 'Mint Green', styleCls: 'bg-mintGreen', colorType: 'mintGreen' },
    { name: 'Teal', styleCls: 'bg-teal', colorType: 'teal' },
    { name: 'Sky Blue', styleCls: 'bg-skyBlue', colorType: 'skyBlue' },
    { name: 'Light Blue', styleCls: 'bg-lightBlue', colorType: 'lightBlue' },
    { name: 'Blue', styleCls: 'bg-blue', colorType: 'blue' },
    { name: 'Grape', styleCls: 'bg-grape', colorType: 'grape' },
    { name: 'Violet', styleCls: 'bg-violet', colorType: 'violet' },
    { name: 'Lavender', styleCls: 'bg-lavender', colorType: 'lavender' },
    { name: 'Magenta', styleCls: 'bg-magenta', colorType: 'magenta' },
    { name: 'Salmon', styleCls: 'bg-salmon', colorType: 'salmon' },
    { name: 'Charcoal', styleCls: 'bg-charcoal', colorType: 'charcoal' },
    { name: 'Grey', styleCls: 'bg-grey', colorType: 'grey' },
    { name: 'Taupe', styleCls: 'bg-taupe', colorType: 'taupe' }
];

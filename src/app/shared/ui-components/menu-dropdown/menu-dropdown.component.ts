import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    Renderer2,
    ViewChild
} from '@angular/core';
import { PriorityType } from '@app/core/types/priorityType';
import { DropdownField, DropdownPriority, DropdownSchema, DropdownBar, DropdownSchedule, DropdownIconType } from '@core/types/dropdown';

@Component({
    selector: 'ui-menu-dropdown',
    templateUrl: './menu-dropdown.component.html',
    styleUrls: ['./menu-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDropdownComponent implements AfterViewChecked {
    isVisible: boolean = false;

    priorityList: PriorityType[] = [1, 2, 3, 4];

    @Input() dropdownSchema!: DropdownSchema;

    @Output() itemClickEvent: EventEmitter<DropdownIconType> = new EventEmitter();
    @Output() changePriorityEvent: EventEmitter<PriorityType> = new EventEmitter();
    @Output() closeEvent: EventEmitter<any> = new EventEmitter();

    @ViewChild('menuView') menuView?: ElementRef;

    constructor(private cdr: ChangeDetectorRef, private render: Renderer2) {}

    setPriority(priority: PriorityType, schemaItem: DropdownPriority) {
        schemaItem.priority = priority;
        this.changePriorityEvent.emit(priority);

        this.close();
    }

    toggleIsVisible() {
        this.isVisible = !this.isVisible;
        this.cdr.detectChanges();
    }

    close() {
        this.isVisible = false;
        this.closeEvent.emit();
    }

    checkForFieldType(dropdownField: any): dropdownField is DropdownField {
        return 'iconType' in dropdownField;
    }
    checkForBarType(dropdownField: any): dropdownField is DropdownBar {
        return 'typeBar' in dropdownField;
    }
    checkForPriorityType(dropdownField: any): dropdownField is DropdownPriority {
        return 'typePriority' in dropdownField;
    }
    checkForScheduleType(dropdownField: any): dropdownField is DropdownSchedule {
        return 'typeSchedule' in dropdownField;
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

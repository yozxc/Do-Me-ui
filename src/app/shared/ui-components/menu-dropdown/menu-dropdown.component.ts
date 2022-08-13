import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { PriorityType } from '@app/core/types/domain/priority';
import { DropdownBar, DropdownField, DropdownIconType, DropdownPriority, DropdownSchedule, DropdownSchema } from '@core/types/domain/dropdown';

@Component({
    selector: 'ui-menu-dropdown',
    templateUrl: './menu-dropdown.component.html',
    styleUrls: ['./menu-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDropdownComponent {
    isVisible: boolean = false;

    priorityList: PriorityType[] = [1, 2, 3, 4];

    @Input() dropdownSchema!: DropdownSchema;

    @Output() itemClickEvent: EventEmitter<DropdownIconType> = new EventEmitter();
    @Output() changePriorityEvent: EventEmitter<PriorityType> = new EventEmitter();
    @Output() closeEvent: EventEmitter<any> = new EventEmitter();

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
}

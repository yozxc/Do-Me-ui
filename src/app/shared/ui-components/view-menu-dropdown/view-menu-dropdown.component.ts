import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ViewType } from '@app/core/types/domain/project';

@Component({
    selector: 'ui-view-menu-dropdown',
    templateUrl: './view-menu-dropdown.component.html',
    styleUrls: ['./view-menu-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewMenuDropdownComponent {
    isVisible: boolean = false;

    viewAsVisible: boolean = false;
    viewGroupBy: boolean = false;
    viewSortBy: boolean = false;

    viewAsValue: string = 'LIST';
    groupByValue: string = 'Default';
    sortByValue: string = 'Default';

    @Output() closeEvent: EventEmitter<any> = new EventEmitter();
    @Output() viewAsEvent: EventEmitter<ViewType> = new EventEmitter();

    constructor(private cdr: ChangeDetectorRef, private render: Renderer2) {}

    toggleIsVisible() {
        this.isVisible = !this.isVisible;
        this.cdr.detectChanges();
    }

    viewAs(projectType: ViewType) {
        this.viewAsEvent.emit(projectType);
    }

    close() {
        this.isVisible = false;
        this.closeEvent.emit();
    }
}

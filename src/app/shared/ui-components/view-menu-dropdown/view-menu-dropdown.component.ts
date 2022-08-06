import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Output,
    Renderer2,
    ViewChild
} from '@angular/core';
import { ProjectType } from '@app/core/types/domain/project';

@Component({
    selector: 'ui-view-menu-dropdown',
    templateUrl: './view-menu-dropdown.component.html',
    styleUrls: ['./view-menu-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewMenuDropdownComponent implements AfterViewChecked {
    isVisible: boolean = false;

    viewAsVisible: boolean = false;
    viewGroupBy: boolean = false;
    viewSortBy: boolean = false;

    viewAsValue: string = 'List';
    groupByValue: string = 'Default';
    sortByValue: string = 'Default';

    @Output() closeEvent: EventEmitter<any> = new EventEmitter();
    @Output() viewAsEvent: EventEmitter<ProjectType> = new EventEmitter();

    @ViewChild('menuView') menuView?: ElementRef;

    constructor(private cdr: ChangeDetectorRef, private render: Renderer2) {}

    toggleIsVisible() {
        this.isVisible = !this.isVisible;
        this.cdr.detectChanges();
    }

    viewAs(projectType: ProjectType) {
        this.viewAsEvent.emit(projectType);
    }

    close() {
        this.isVisible = false;
        this.closeEvent.emit();
    }

    //

    // this is setting menu to be visible in viewport
    ngAfterViewChecked(): void {
        if (!this.menuView) return;

        const element = this.menuView.nativeElement;
        const coordinates = this.menuView.nativeElement.getBoundingClientRect();

        if (coordinates.bottom > window.innerHeight) {
            this.render.setStyle(element, 'top', `calc(50% - ${coordinates.bottom - window.innerHeight + 20}px)`);
        }
        if (coordinates.top < 0) {
            this.render.setStyle(element, 'top', `calc(50% + ${coordinates.top * -1 + 20}px)`);
        }
        if (coordinates.left < 0) {
            this.render.setStyle(element, 'left', `calc(50% + ${coordinates.left * -1 + 20}px)`);
        }
        if (coordinates.right > window.innerWidth) {
            this.render.setStyle(element, 'left', `calc(50% - ${coordinates.right - window.innerWidth + 20}px)`);
        }
    }
}

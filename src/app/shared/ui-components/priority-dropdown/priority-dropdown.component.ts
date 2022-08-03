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
    Renderer2
} from '@angular/core';
import { PriorityType } from '@app/core/types/priorityType';

@Component({
    selector: 'ui-priority-dropdown',
    templateUrl: './priority-dropdown.component.html',
    styleUrls: ['./priority-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriorityDropdownComponent implements AfterViewChecked {
    isVisible: boolean = false;

    priorityList: PriorityType[] = [1, 2, 3, 4];

    @Input() priority: number = 4;

    @Output() closeEvent: EventEmitter<any> = new EventEmitter();
    @Output() changePriorityEvent: EventEmitter<any> = new EventEmitter();

    @ViewChild('menuView') menuView?: ElementRef;

    constructor(private cdr: ChangeDetectorRef, private render: Renderer2) {}

    toggleIsVisible() {
        this.isVisible = !this.isVisible;
        this.cdr.detectChanges();
    }

    changePriority(p: number) {
        this.priority = p;
        this.changePriorityEvent.emit(p);
        this.close();
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

import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'ui-view-menu-dropdown',
    templateUrl: './view-menu-dropdown.component.html',
    styleUrls: ['./view-menu-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewMenuDropdownComponent implements OnInit, AfterViewChecked {
    isVisible: boolean = false;

    @Output() onClose: EventEmitter<any> = new EventEmitter();

    // todo : set normal type instead of 'any'
    @ViewChild('menuView') menuView: any;

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {}

    // this is setting menu to be visible in viewport
    ngAfterViewChecked(): void {
        if (!this.menuView) return;

        const coordinates = this.menuView.nativeElement.getBoundingClientRect();
        if (coordinates.bottom > window.innerHeight) {
            this.menuView.nativeElement.style.top = `calc(50% - ${coordinates.bottom - window.innerHeight + 5}px)`;
        }
        if (coordinates.top < 0) {
            this.menuView.nativeElement.style.top = `calc(50% + ${coordinates.top * -1 + 5}px)`;
        }
        if (coordinates.left < 0) {
            this.menuView.nativeElement.style.left = `calc(50% + ${coordinates.left * -1 + 5}px)`;
        }
        if (coordinates.right > window.innerWidth) {
            this.menuView.nativeElement.style.left = `calc(50% - ${coordinates.right - window.innerWidth + 5}px)`;
        }
    }

    toggleIsVisible() {
        this.isVisible = !this.isVisible;
        this.cdr.detectChanges();
    }

    close() {
        this.isVisible = false;
        this.onClose.emit();
    }
}

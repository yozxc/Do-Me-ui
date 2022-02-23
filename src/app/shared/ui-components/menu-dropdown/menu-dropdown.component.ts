import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
    ViewChild,
    ChangeDetectorRef,
    Output,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'app-menu-dropdown',
    templateUrl: './menu-dropdown.component.html',
    styleUrls: ['./menu-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDropdownComponent implements OnInit, AfterViewChecked {
    isVisible: boolean = false;

    @Input() addAbove: boolean = false;
    @Input() addBelow: boolean = false;
    @Input() edit: boolean = false;
    @Input() favorites: boolean = false;
    @Input() schedule: boolean = false;
    @Input() priority: boolean = false;
    @Input() addSection: boolean = false;
    @Input() showHideTasks: boolean = false;
    @Input() moveTo: boolean = false;
    @Input() archive: boolean = false;
    @Input() del: boolean = false;

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

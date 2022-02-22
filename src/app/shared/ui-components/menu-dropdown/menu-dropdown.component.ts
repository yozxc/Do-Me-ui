import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-dropdown',
    templateUrl: './menu-dropdown.component.html',
    styleUrls: ['./menu-dropdown.component.scss'],
})
export class MenuDropdownComponent implements OnInit {
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

    constructor() {}

    ngOnInit(): void {}

    toggleIsVisible() {
        this.isVisible = !this.isVisible;
    }
}

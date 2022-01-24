import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-place-sub-list',
    templateUrl: './main-place-sub-list.component.html',
    styleUrls: ['./main-place-sub-list.component.scss'],
})
export class MainPlaceSubListComponent implements OnInit {
    _isActive: boolean = true;

    constructor() {}

    ngOnInit(): void {}

    toggleIsActive() {
        this._isActive = !this._isActive;
    }
}

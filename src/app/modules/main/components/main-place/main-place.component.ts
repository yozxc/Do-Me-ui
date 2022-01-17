import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-place',
    templateUrl: './main-place.component.html',
    styleUrls: ['./main-place.component.scss'],
})
export class MainPlaceComponent implements OnInit {
    _isActive: boolean = true;

    constructor() {}

    ngOnInit(): void {}

    toggleIsActive() {
        this._isActive = !this._isActive;
    }
}

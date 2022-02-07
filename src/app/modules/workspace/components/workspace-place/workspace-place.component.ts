import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-workspace-place',
    templateUrl: './workspace-place.component.html',
    styleUrls: ['./workspace-place.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspacePlaceComponent implements OnInit {
    _isActive: boolean = true;

    constructor() {}

    ngOnInit(): void {}

    toggleIsActive() {
        this._isActive = !this._isActive;
    }
}

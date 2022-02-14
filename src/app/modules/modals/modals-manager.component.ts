import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modals-manager',
    templateUrl: './modals-manager.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalsManagerComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

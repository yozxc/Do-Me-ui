import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-modals-manager',
    templateUrl: './modals-manager.component.html',
    styleUrls: ['./modals-manager.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalsManagerComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-list-add-section',
    templateUrl: './list-add-section.component.html',
    styleUrls: ['./list-add-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListAddSectionComponent {
    isOnAdd: boolean = false;

    constructor() {}
}

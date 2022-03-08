import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-table-add-section',
    templateUrl: './table-add-section.component.html',
    styleUrls: ['./table-add-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableAddSectionComponent {
    isOnAdd: boolean = false;

    @Input() type!: 'bar' | 'panel';

    constructor() {}
}

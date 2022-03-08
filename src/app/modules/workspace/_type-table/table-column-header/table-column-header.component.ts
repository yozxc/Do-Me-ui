import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-table-column-header',
    templateUrl: './table-column-header.component.html',
    styleUrls: ['./table-column-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableColumnHeaderComponent {
    title: string = '(No Section)';

    isChangingTitle: boolean = false;

    constructor() {}

    saveTitle(title: string) {
        this.title = title;
        this.isChangingTitle = false;
    }
}

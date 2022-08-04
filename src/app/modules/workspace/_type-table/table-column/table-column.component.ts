import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-table-column',
    templateUrl: './table-column.component.html',
    styleUrls: ['./table-column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableColumnComponent {
    taskEditorState: boolean = false;

    constructor() {}
}

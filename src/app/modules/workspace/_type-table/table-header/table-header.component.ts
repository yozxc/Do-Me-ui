import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-table-header',
    templateUrl: './table-header.component.html',
    styleUrls: ['./table-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableHeaderComponent {
    isOnEdit: boolean = false;
    date: number = Date.now();

    @Input() title!: string;
    @Input() dateDisplay: boolean = false;
    @Input() editableTitle: boolean = true;

    constructor() {}
}

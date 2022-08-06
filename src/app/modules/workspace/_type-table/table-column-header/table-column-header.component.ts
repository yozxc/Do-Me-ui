import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table-column-header',
    templateUrl: './table-column-header.component.html',
    styleUrls: ['./table-column-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableColumnHeaderComponent {
    isChangingTitle: boolean = false;

    @Input() title!: string;
    @Input() editableTitle: boolean = true;

    @Output() setTitleEvent: EventEmitter<string> = new EventEmitter();

    constructor() {}

    saveTitle(title: string) {
        this.setTitleEvent.emit(title);
        this.isChangingTitle = false;
    }
}

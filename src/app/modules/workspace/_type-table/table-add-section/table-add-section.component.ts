import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { AddSectionData } from '@app/core/types/domain/section';

@Component({
    selector: 'app-table-add-section',
    templateUrl: './table-add-section.component.html',
    styleUrls: ['./table-add-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableAddSectionComponent {
    isOnAdd: boolean = false;

    @Input() type!: 'bar' | 'panel';

    @Output() addSectionEvent: EventEmitter<AddSectionData> = new EventEmitter();

    constructor() {}

    onSave(title: string) {
        this.addSectionEvent.emit({ title });
        this.isOnAdd = false;
    }
}

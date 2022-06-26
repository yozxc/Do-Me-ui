import { FormControl } from '@angular/forms';
import { ChangeDetectionStrategy, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { AddSectionData } from '@app/core/types/addSectionData';

@Component({
    selector: 'app-list-add-section',
    templateUrl: './list-add-section.component.html',
    styleUrls: ['./list-add-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListAddSectionComponent implements OnInit {
    isOnAdd: boolean = false;
    addButtonDisabled: boolean = true;

    @Output() addSectionEvent: EventEmitter<AddSectionData> = new EventEmitter();

    sectionTitleForm: FormControl = new FormControl();

    constructor() {}

    ngOnInit(): void {
        this.sectionTitleForm.valueChanges.subscribe((value) => (this.addButtonDisabled = !value.length));
    }

    onSave() {
        this.addSectionEvent.emit({ sectionTitle: this.sectionTitleForm.value });
        this.sectionTitleForm.setValue('');

        this.isOnAdd = false;
    }

    onCancel() {
        this.sectionTitleForm.setValue('');

        this.isOnAdd = false;
    }
}

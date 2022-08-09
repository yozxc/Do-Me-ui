import { SectionsService } from '@core/store/sections/sections.service';
import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddSectionDTO } from '@app/core/types/domain/section';

@Component({
    selector: 'app-table-add-section',
    templateUrl: './table-add-section.component.html',
    styleUrls: ['./table-add-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableAddSectionComponent implements OnInit {
    saveBtnDisable: boolean = true;
    isOnAdd: boolean = false;

    @Input() type!: 'bar' | 'panel';
    @Input() projectID: string | null = null;

    addSectionForm = this.fb.group<AddSectionDTO>({
        title: '',
        projectID: null
    });

    constructor(private fb: FormBuilder, private sectionsService: SectionsService) {}

    ngOnInit(): void {
        this.addSectionForm.patchValue({ projectID: this.projectID });
        this.addSectionForm.valueChanges.subscribe((formVal) => (this.saveBtnDisable = !formVal.title));
    }

    onSave() {
        // todo : check validation
        this.addSectionForm.value.title && this.sectionsService.addSection(this.addSectionForm.value as AddSectionDTO);
        this.isOnAdd = false;
    }

    onCancel() {
        this.isOnAdd = false;
    }
}

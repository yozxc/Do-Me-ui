import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddSectionDTO } from '@app/core/types/domain/section';
import { SectionsService } from '@core/store/sections/sections.service';

@Component({
    selector: 'app-list-add-section',
    templateUrl: './list-add-section.component.html',
    styleUrls: ['./list-add-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListAddSectionComponent implements OnInit {
    isOnAdd: boolean = false;
    addButtonDisabled: boolean = true;

    @Input() projectID: string | null = null;

    addSectionForm = this.fb.group<AddSectionDTO>({
        title: '',
        projectID: null
    });

    constructor(private fb: FormBuilder, private sectionsService: SectionsService) {}

    ngOnInit(): void {
        this.addSectionForm.patchValue({ projectID: this.projectID });
        this.addSectionForm.valueChanges.subscribe((formVal) => (this.addButtonDisabled = !formVal.title));
    }

    onSave() {
        // todo : check validators
        this.addSectionForm.value.title && this.sectionsService.addSection(this.addSectionForm.value as AddSectionDTO) && this.addSectionForm.reset();

        this.isOnAdd = false;
    }

    onCancel() {
        this.isOnAdd = false;
    }
}

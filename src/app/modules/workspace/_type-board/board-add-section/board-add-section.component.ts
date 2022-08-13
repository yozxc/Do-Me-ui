import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddSectionData } from '@app/core/types/domain/section';
import { SectionsService } from '@core/store/sections/sections.service';

@Component({
    selector: 'app-board-add-section[type]',
    templateUrl: './board-add-section.component.html',
    styleUrls: ['./board-add-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardAddSectionComponent implements OnInit {
    saveBtnDisable: boolean = true;
    isOnAdd: boolean = false;

    @Input() type!: 'bar' | 'panel';
    @Input() projectID: string | null = null;

    addSectionForm = this.fb.group<AddSectionData>({
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
        this.addSectionForm.value.title && this.sectionsService.addSection(this.addSectionForm.value as AddSectionData);
        this.isOnAdd = false;
    }

    onCancel() {
        this.isOnAdd = false;
    }
}

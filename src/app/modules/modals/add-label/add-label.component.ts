import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LabelsService } from '@app/core/store/labels/labels.service';
import { AddLabelData } from '@app/core/types/domain/label';

@Component({
    selector: 'app-add-label',
    templateUrl: './add-label.component.html',
    styleUrls: ['./add-label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddLabelComponent implements OnInit {
    __addButtonDisabled: boolean = true;

    form = this.fb.group<AddLabelForm>({
        name: '',
        colorCls: 'berryRed',
        favorites: false,
        tasksID: this.fb.array<string>([])
    });

    constructor(private router: Router, private fb: FormBuilder, private labelsService: LabelsService) {}

    ngOnInit(): void {
        this.form.valueChanges.subscribe((value) => (this.__addButtonDisabled = !value.name!.length));
    }

    onSave() {
        this.labelsService.addLabel(this.form.value as AddLabelData);

        this.router.navigateByUrl(this.router.url.replace('(', '').split('//')[0]);
    }

    onCancel() {
        this.router.navigateByUrl(this.router.url.replace('(', '').split('//')[0]);
    }
}

interface AddLabelForm extends Omit<AddLabelData, 'tasksID'> {
    tasksID: FormArray<FormControl<string | null>>;
}

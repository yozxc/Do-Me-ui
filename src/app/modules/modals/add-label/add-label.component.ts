import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LabelsService } from '@app/core/store/labels/labels.service';

@Component({
    selector: 'app-add-label',
    templateUrl: './add-label.component.html',
    styleUrls: ['./add-label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddLabelComponent implements OnInit {
    __addButtonDisabled: boolean = true;

    form = this.fb.group({
        name: '',
        colorCls: 'berryRed',
        favorites: false
    });

    constructor(private router: Router, private fb: UntypedFormBuilder, private labelsService: LabelsService) {}

    ngOnInit(): void {
        this.form.get('name')?.valueChanges.subscribe((value) => (this.__addButtonDisabled = !value.length));
    }

    onSave() {
        this.labelsService.addLabel(this.form.value);

        this.router.navigateByUrl(this.router.url.replace('(', '').split('//')[0]);
    }

    onCancel() {
        this.router.navigateByUrl(this.router.url.replace('(', '').split('//')[0]);
    }
}

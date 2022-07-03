import { FormControl } from '@angular/forms';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DropdownSchema } from '@app/core/types/dropdown';

@Component({
    selector: 'app-list-header',
    templateUrl: './list-header.component.html',
    styleUrls: ['./list-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListHeaderComponent implements OnInit {
    isOnEdit: boolean = false;
    disabledSave: boolean = true;
    date: number = Date.now();

    titleControl!: FormControl;

    @Input() title!: string | undefined;
    @Input() dropdownSchema!: DropdownSchema;
    @Input() _dateDisplay: boolean = false;
    @Input() _editableTitle: boolean = true;

    constructor() {}

    ngOnInit(): void {
        this.titleControl = new FormControl(this.title);
        this.titleControl.valueChanges.subscribe((value) => (this.disabledSave = value.length));
    }

    onCancel() {
        this.isOnEdit = false;
        this.titleControl.setValue(this.title);
    }

    onSave() {
        if (this.titleControl.value.length) {
            this.isOnEdit = false;
            this.title = this.titleControl.value;
        }
    }
}

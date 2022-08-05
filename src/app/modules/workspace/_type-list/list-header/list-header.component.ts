import { UntypedFormControl } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownSchema } from '@app/core/types/domain/dropdown';
import { TitleEdit } from '@app/core/types/realization/titleEdit';

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

    titleControl!: UntypedFormControl;

    @Input() title!: string;
    @Input() dropdownSchema!: DropdownSchema;
    @Input() _dateDisplay: boolean = false;
    @Input() _editableTitle: boolean = true;

    @Output() titleEdit: EventEmitter<TitleEdit> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
        this.titleControl = new UntypedFormControl(this.title);
        this.titleControl.valueChanges.subscribe((value) => (this.disabledSave = value.length));
    }

    onCancel() {
        this.isOnEdit = false;
        this.titleControl.setValue(this.title);
    }

    onSave() {
        if (this.titleControl.value.length) {
            this.isOnEdit = false;

            this.titleEdit.emit({ oldValue: this.title, newValue: this.titleControl.value });
            // this.title = this.titleControl.value;
        }
    }
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropdownSchema } from '@app/core/types/domain/dropdown';
import { ViewType } from '@app/core/types/domain/project';
import { TitleEdit } from '@app/core/types/realization/titleEdit';

@Component({
    selector: 'app-view-header[title]',
    templateUrl: './view-header.component.html',
    styleUrls: ['./view-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewHeaderComponent implements OnInit, OnChanges {
    isOnEdit: boolean = false;
    disabledSave: boolean = true;
    date: number = Date.now();

    titleControl: FormControl = new FormControl();

    @Input() title!: string;
    @Input() dropdownSchema!: DropdownSchema;
    @Input() _dateDisplay: boolean = false;
    @Input() editableTitle: boolean = true;

    @Output() titleEditEvent: EventEmitter<TitleEdit> = new EventEmitter();

    @Output() viewAsEvent: EventEmitter<ViewType> = new EventEmitter();

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.titleControl.setValue(changes['title'].currentValue);
    }

    ngOnInit(): void {
        this.titleControl.valueChanges.subscribe((value) => (this.disabledSave = value.length));
    }

    onCancel() {
        this.isOnEdit = false;
        this.titleControl.setValue(this.title);
    }

    onSave() {
        if (this.titleControl.value.length) {
            this.isOnEdit = false;

            this.titleEditEvent.emit({ oldValue: this.title, newValue: this.titleControl.value });
            // this.title = this.titleControl.value;
        }
    }
}

import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AddTaskData, TaskData } from '@app/core/types/taskData';
import { v4 } from 'uuid';
import { UntypedFormControl } from '@angular/forms';

@Component({
    selector: 'app-list-section',
    templateUrl: './list-section.component.html',
    styleUrls: ['./list-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSectionComponent implements OnInit {
    taskEditorState: boolean = false;
    isChangingTitle: boolean = false;
    changeButtonDisabled: boolean = false;
    isClosed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    @Input() _editableTitle: boolean = true;

    @Input() listTitle!: string;
    @Input() tasksList?: TaskData[];

    titleFormControl!: UntypedFormControl;

    constructor() {}

    ngOnInit(): void {
        this.titleFormControl = new UntypedFormControl(this.listTitle);
        this.titleFormControl.valueChanges.subscribe((value) => (this.changeButtonDisabled = !value.length));
    }

    saveTitle(listTitle: string) {
        this.listTitle = listTitle;
        this.isChangingTitle = false;
    }

    toggleIsClosed() {
        this.isClosed$.next(!this.isClosed$.getValue());
    }

    addTask(event: AddTaskData) {
        this.tasksList?.push({
            taskID: v4(),
            taskName: event.taskName,
            taskDescription: event.taskDescription,
            isChecked: false,
            priority: event.priority
        });
    }

    onSave() {
        if (this.titleFormControl.value.length) {
            this.listTitle = this.titleFormControl.value;
            this.isChangingTitle = false;
        }
    }

    onCancel() {}
}

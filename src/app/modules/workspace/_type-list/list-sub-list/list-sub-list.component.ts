import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TaskData } from '@app/core/types/taskData';
import { AddTaskData } from '@app/core/types/addTaskData';
import { v4 } from 'uuid';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-list-sub-list',
    templateUrl: './list-sub-list.component.html',
    styleUrls: ['./list-sub-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSubListComponent implements OnInit {
    isChangingTitle: boolean = false;
    changeButtonDisabled: boolean = false;
    isClosed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    @Input() editableTitle: boolean = true;

    @Input() listTitle!: string;
    @Input() tasksList?: TaskData[];

    titleFormControl!: FormControl;

    constructor() {}

    ngOnInit(): void {
        this.titleFormControl = new FormControl(this.listTitle);
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
            isChecked: false
        });
    }

    onSave() {
        if (this.titleFormControl.value.length) {
            // todo : save to back
            this.listTitle = this.titleFormControl.value;
            this.isChangingTitle = false;
        }
    }

    onCancel() {}
}

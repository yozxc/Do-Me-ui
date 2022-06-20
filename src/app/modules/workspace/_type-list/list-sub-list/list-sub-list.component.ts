import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskData } from '@app/core/types/taskData';
import { AddTaskData } from '@app/core/types/addTaskData';
import { v4 } from 'uuid';

@Component({
    selector: 'app-list-sub-list',
    templateUrl: './list-sub-list.component.html',
    styleUrls: ['./list-sub-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSubListComponent {
    isChangingTitle: boolean = false;
    isClosed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    @Input() listTitle: string = 'Overdue';
    @Input() tasksList?: TaskData[];

    constructor() {}

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
            isChecked: false
        });
    }
}

import { TasksQuery } from '@core/store/tasks/tasks.query';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { v4 } from 'uuid';

import { Task } from '@app/core/types/domain/task';
import { DropdownIconType, DropdownSchema } from '@app/core/types/domain/dropdown';
import { PriorityType } from '@app/core/types/domain/priority';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTaskComponent implements OnInit {
    areControlsVisible: boolean = false;
    checkboxID = v4();

    @Input() taskID!: string;

    task$!: Observable<Task>;

    dropdownSchema: DropdownSchema = [...dropdownSchema];

    constructor(private cdr: ChangeDetectorRef, public tasksQuery: TasksQuery) {}

    ngOnInit(): void {
        this.task$ = this.tasksQuery.selectTask(this.taskID);

        this.task$.subscribe((val) => console.log(val));

        // todo : check for wtf is this :D
        this.initDDSchema();
    }

    setPriority(priority: PriorityType) {
        // this.tasksData.priority = priority;
    }

    initDDSchema() {
        this.dropdownSchema.forEach((item, index) => {
            // if ('priority' in item) item.priority = this.tasksData.priority;

            this.dropdownSchema[index] = { ...item };
        });
    }

    dropdownEventRecivier(e: DropdownIconType) {
        e === DropdownIconType.EDIT && true;
        e === DropdownIconType.GO_TO && true;
        e === DropdownIconType.MOVE_TO && true;
        e === DropdownIconType.DEL && this._delete();
    }

    private _delete() {}
}

const dropdownSchema: DropdownSchema = [
    {
        iconType: DropdownIconType.EDIT,
        text: 'Edit task'
    },
    {
        iconType: DropdownIconType.GO_TO,
        text: 'Go to project'
    },
    {
        typeBar: true
    },
    {
        typePriority: true,
        priority: 4
    },
    {
        typeSchedule: true
    },
    {
        typeBar: true
    },
    {
        iconType: DropdownIconType.MOVE_TO,
        text: 'Move to project'
    },
    {
        iconType: DropdownIconType.DEL,
        text: 'Delete task'
    }
];

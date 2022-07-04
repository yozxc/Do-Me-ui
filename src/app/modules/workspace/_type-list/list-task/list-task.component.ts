import { ProjectsService } from '@core/services/data/projects/projects.service';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { v4 } from 'uuid';

import { TaskData } from '@app/core/types/taskData';
import { DropdownIconType, DropdownSchema } from '@app/core/types/dropdown';
import { PriorityType } from '@app/core/types/priorityType';

@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTaskComponent implements OnInit {
    areControlsVisible: boolean = false;
    checkboxID = v4();

    @Input() taskData!: TaskData;

    dropdownSchema: DropdownSchema = [...dropdownSchema];

    constructor(private projectsService: ProjectsService) {}

    ngOnInit(): void {
        this.initDDSchema();
    }

    setPriority(priority: PriorityType) {
        this.taskData.priority = priority;
    }

    initDDSchema() {
        this.dropdownSchema.forEach((item, index) => {
            if ('priority' in item) item.priority = this.taskData.priority;

            this.dropdownSchema[index] = { ...item };
        });
    }

    dropdownEventRecivier(e: DropdownIconType) {
        e === DropdownIconType.EDIT && true;
        e === DropdownIconType.GO_TO && true;
        e === DropdownIconType.MOVE_TO && true;
        e === DropdownIconType.DEL && this._delete();
    }

    private _delete() {
        this.projectsService.deleteTask(this.taskData.taskID);
    }
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

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { v4 } from 'uuid';

import { TaskData } from '@app/core/types/taskData';
import { DropdownSchema } from '@app/core/types/dropdown';
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

    constructor() {}

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
}

const dropdownSchema: DropdownSchema = [
    {
        iconType: 'EDIT',
        text: 'Edit task'
    },
    {
        iconType: 'GO_TO',
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
        iconType: 'MOVE_TO',
        text: 'Move to project'
    },
    {
        iconType: 'DEL',
        text: 'Delete task'
    }
];

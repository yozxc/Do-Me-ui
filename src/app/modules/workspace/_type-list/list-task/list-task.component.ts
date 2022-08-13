import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { LabelsQuery } from '@core/store/labels/labels.query';
import { ProjectsQuery } from '@core/store/projects/projects.query';
import { SectionsQuery } from '@core/store/sections/sections.query';
import { TasksQuery } from '@core/store/tasks/tasks.query';
import { Section } from '@core/types/domain/section';
import { v4 } from 'uuid';

import { DropdownIconType, DropdownSchema } from '@app/core/types/domain/dropdown';
import { Label } from '@app/core/types/domain/label';
import { PriorityType } from '@app/core/types/domain/priority';
import { Project } from '@app/core/types/domain/project';
import { Task } from '@app/core/types/domain/task';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-list-task[taskID]',
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTaskComponent implements OnInit {
    areControlsVisible: boolean = false;
    checkboxID = v4();

    @Input() labelID: string | null = null;
    @Input() taskID!: string;

    task$!: Observable<Task>;

    dropdownSchema: DropdownSchema = [...dropdownSchema];

    constructor(
        private cdr: ChangeDetectorRef,
        public tasksQuery: TasksQuery,
        private labelsQuery: LabelsQuery,
        private projectsQuery: ProjectsQuery,
        private sectionsQuery: SectionsQuery
    ) {}

    ngOnInit(): void {
        this.task$ = this.tasksQuery.selectTask(this.taskID);

        // todo : check for wtf is this :D
        this.initDDSchema();
    }

    getLabel(id: string | null): Label | undefined {
        if (id) return this.labelsQuery.getLabel(id);
        return;
    }

    getProject(id: string | null): Project | undefined {
        if (id) return this.projectsQuery.getProject(id);
        return;
    }

    getSection(id: string | null): Section | undefined {
        if (id) return this.sectionsQuery.getSection(id);
        return;
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

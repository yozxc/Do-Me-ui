import { InboxService } from './inbox.state/inbox.service';
import { SectionsService } from '@core/store/sections/sections.service';
import { SectionsQuery } from '@core/store/sections/sections.query';
import { TasksService } from '@app/core/store/tasks/tasks.service';
import { TasksQuery } from '@core/store/tasks/tasks.query';
import { InboxQuery } from './inbox.state/inbox.query';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTaskData } from '@app/core/types/domain/task';
import { AddSectionData } from '@app/core/types/domain/section';
import { ViewType } from '@app/core/types/domain/project';

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InboxComponent implements OnInit {
    addNoSecTask: boolean = false;

    tasksID$!: Observable<string[]>;
    sectionsID$!: Observable<string[]>;

    constructor(
        private sectionsService: SectionsService,
        private sectionsQuery: SectionsQuery,
        private tasksService: TasksService,
        private tasksQuery: TasksQuery,
        private inboxService: InboxService,
        public inboxQuery: InboxQuery
    ) {}

    ngOnInit(): void {
        this.tasksID$ = this.tasksQuery.selectInboxTasksID();
        this.sectionsID$ = this.sectionsQuery.selectInboxSectionsID();
    }

    addNoSectionTask(taskData: AddTaskData) {
        this.tasksService.addTask(taskData);
    }

    addSection(sectionData: AddSectionData) {
        this.sectionsService.addSection(sectionData);
    }

    updateType(type: ViewType) {
        this.inboxService.updateType(type);
    }
}

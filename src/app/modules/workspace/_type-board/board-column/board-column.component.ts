import { TasksQuery } from '@core/store/tasks/tasks.query';
import { SectionsService } from '@core/store/sections/sections.service';
import { ProjectsQuery } from '@app/core/store/projects/projects.query';
import { SectionsQuery } from '@core/store/sections/sections.query';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Section } from '@app/core/types/domain/section';
import { Observable } from 'rxjs';
import { AddTaskDTO } from '@app/core/types/domain/task';
import { TasksService } from '@app/core/store/tasks/tasks.service';

@Component({
    selector: 'app-board-column',
    templateUrl: './board-column.component.html',
    styleUrls: ['./board-column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardColumnComponent implements OnInit {
    taskEditorState: boolean = false;

    @Input() title!: string;
    @Input() editableTitle: boolean = true;
    @Input() sectionID!: string;
    @Input() projectID!: string;
    @Input() inbox: boolean = false;

    section$!: Observable<Section>;

    noSecTasksID$!: Observable<string[]>;

    constructor(
        private sectionsService: SectionsService,
        private tasksService: TasksService,
        private tasksQuery: TasksQuery,
        private sectionsQuery: SectionsQuery,
        private projectsQuery: ProjectsQuery
    ) {}

    ngOnInit(): void {
        this.section$ = this.sectionsQuery.selectSection(this.sectionID);

        this.inbox && (this.noSecTasksID$ = this.tasksQuery.selectInboxTasksID());

        const noSecTasksID$ = this.projectID && this.projectsQuery.selectNoSectionTasksID(this.projectID);
        noSecTasksID$ && (this.noSecTasksID$ = noSecTasksID$);
    }

    updateTitle(title: string) {
        console.log('qwe');
        this.sectionsService.updateTitle(this.sectionID, title);
    }

    addTask(taskData: AddTaskDTO) {
        this.setSectionID(taskData);
        this.tasksService.addTask(taskData);
    }

    addNoSectionTask(taskData: AddTaskDTO) {
        this.setProjectID(taskData);
        this.tasksService.addTask(taskData);
    }

    setProjectID(obj: any) {
        obj.projectID = this.projectID;
    }

    setSectionID(obj: any) {
        obj.sectionID = this.sectionID;
    }
}

import { SectionsService } from '@core/store/sections/sections.service';
import { ProjectsQuery } from '@app/core/store/projects/projects.query';
import { SectionsQuery } from '@core/store/sections/sections.query';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Section } from '@app/core/types/domain/section';
import { Observable } from 'rxjs';
import { AddTaskData } from '@app/core/types/domain/task';
import { TasksService } from '@app/core/store/tasks/tasks.service';

@Component({
    selector: 'app-table-column',
    templateUrl: './table-column.component.html',
    styleUrls: ['./table-column.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableColumnComponent implements OnInit {
    taskEditorState: boolean = false;

    @Input() title!: string;
    @Input() editableTitle: boolean = true;
    @Input() sectionID!: string;
    @Input() projectID!: string;

    section$!: Observable<Section>;

    noSecTasksID$!: Observable<string[]>;

    constructor(
        private sectionsService: SectionsService,
        private tasksService: TasksService,
        private sectionsQuery: SectionsQuery,
        private projectsQuery: ProjectsQuery
    ) {}

    ngOnInit(): void {
        this.section$ = this.sectionsQuery.selectSection(this.sectionID);

        const noSecTasksID$ = this.projectsQuery.selectNoSectionTasksID(this.projectID);
        noSecTasksID$ && (this.noSecTasksID$ = noSecTasksID$);
    }

    updateTitle(title: string) {
        console.log('qwe');
        this.sectionsService.updateTitle(this.sectionID, title);
    }

    addTask(taskData: AddTaskData) {
        this.setSectionID(taskData);
        this.tasksService.addTask(taskData);
    }

    addNoSectionTask(taskData: AddTaskData) {
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

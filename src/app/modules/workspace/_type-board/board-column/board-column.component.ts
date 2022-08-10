import { TasksQuery } from '@core/store/tasks/tasks.query';
import { SectionsService } from '@core/store/sections/sections.service';
import { ProjectsQuery } from '@app/core/store/projects/projects.query';
import { SectionsQuery } from '@core/store/sections/sections.query';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Section } from '@app/core/types/domain/section';
import { Observable } from 'rxjs';
import { TasksService } from '@app/core/store/tasks/tasks.service';

// todo : refactor component
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
    // @Input() inbox: boolean = false;

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
        this.sectionID && (this.section$ = this.sectionsQuery.selectSection(this.sectionID));
        !this.sectionID && this.projectID && (this.noSecTasksID$ = this.projectsQuery.selectNoSectionTasksID(this.projectID));

        !this.projectID && !this.sectionID && (this.noSecTasksID$ = this.tasksQuery.selectInboxTasksID());
    }

    updateTitle(title: string) {
        this.sectionsService.updateTitle(this.sectionID, title);
    }
}

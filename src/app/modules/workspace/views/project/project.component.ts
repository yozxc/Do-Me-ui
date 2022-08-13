import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WORKSPACE_ROUTE } from '@app/core/router/nav-constants';
import { ProjectsQuery } from '@app/core/store/projects/projects.query';
import { ProjectsService } from '@app/core/store/projects/projects.service';
import { SectionsService } from '@app/core/store/sections/sections.service';
import { TasksService } from '@app/core/store/tasks/tasks.service';
import { Project, ViewType } from '@app/core/types/domain/project';
import { AddSectionDTO } from '@app/core/types/domain/section';
import { AddTaskDTO } from '@app/core/types/domain/task';
import { TitleEdit } from '@core/types/realization/titleEdit';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {
    projectID!: string;

    project$!: Observable<Project>;

    constructor(
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef,
        private projectsService: ProjectsService,
        private sectionsService: SectionsService,
        private tasksService: TasksService,
        public projectsQuery: ProjectsQuery
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const projectID = params.get(WORKSPACE_ROUTE.ID);
            if (projectID !== this.projectID) {
                projectID && (this.projectID = projectID);

                this.project$ = this.projectsQuery.selectProject(this.projectID);

                this.cdr.detectChanges();
            }
        });
    }

    addNoSectionTask(taskData: AddTaskDTO) {
        this.setProjectID(taskData);
        this.tasksService.addTask(taskData);
    }

    addSection(sectionData: AddSectionDTO) {
        this.setProjectID(sectionData);
        this.sectionsService.addSection(sectionData);
    }

    updateTitle(titleEdit: TitleEdit) {
        this.projectsService.updateTitle(this.projectID, titleEdit.newValue);
    }

    updateType(projectType: ViewType) {
        this.projectsService.updateType(this.projectID, projectType);
    }

    setProjectID(obj: any) {
        obj.projectID = this.projectID;
    }
}

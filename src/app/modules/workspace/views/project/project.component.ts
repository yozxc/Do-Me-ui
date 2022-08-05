import { TitleEdit } from '@core/types/realization/titleEdit';
import { ProjectsService } from '@app/core/store/projects/projects.service';
import { Observable } from 'rxjs';
import { Project } from '@app/core/types/domain/project';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MAIN_PLACE_ROUTE } from '@app/core/router/nav-constants';
import { AddTaskData } from '@app/core/types/domain/task';
import { AddSectionData } from '@app/core/types/domain/section';
import { ProjectsQuery } from '@app/core/store/projects/projects.query';
import { SectionsService } from '@app/core/store/sections/sections.service';
import { TasksService } from '@app/core/store/tasks/tasks.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {
    __addNoSectionTask: boolean = false;

    projectId!: string;

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
            const projectID = params.get(MAIN_PLACE_ROUTE.ID);
            if (projectID !== this.projectId) {
                projectID && (this.projectId = projectID);

                this.project$ = this.projectsQuery.selectProject(this.projectId);

                this.cdr.detectChanges();
            }
        });
    }

    addNoSectionTask(taskData: AddTaskData) {
        this.setProjectID(taskData);
        this.tasksService.addTask(taskData);
    }

    addSection(sectionData: AddSectionData) {
        this.setProjectID(sectionData);
        this.sectionsService.addSection(sectionData);
    }

    updateTitle(titleEdit: TitleEdit) {
        this.projectsService.updateTitle(this.projectId, titleEdit.newValue);
    }

    setProjectID(obj: any) {
        obj.projectID = this.projectId;
    }
}

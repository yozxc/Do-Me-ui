import { Project } from '@app/core/types/projectType';
import { ProjectsService } from '@core/services/data/projects/projects.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MAIN_PLACE_ROUTE } from '@app/core/router/nav-constants';
import { v4 } from 'uuid';
import { AddTaskData } from '@app/core/types/taskData';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {
    __addNoSectionTask: boolean = false;

    projectId!: string | null;
    projectData!: Project | null;

    constructor(private route: ActivatedRoute, private projectsService: ProjectsService, private cdr: ChangeDetectorRef) {
        this.route.paramMap.subscribe((params) => params.get(MAIN_PLACE_ROUTE.ID) && this.ngOnInit());
    }

    // todo : set async pipe
    ngOnInit(): void {
        this.projectId = this.route.snapshot.paramMap.get(MAIN_PLACE_ROUTE.ID);
        this.projectData = this.projectsService.getProjectDataByID(this.projectId);
    }

    addNoSectionTask(e: AddTaskData) {
        this.projectData?.noSectionTasks?.push({
            taskID: v4(),
            taskName: e.taskName,
            taskDescription: e.taskDescription,
            isChecked: false,
            priority: e.priority
        });
    }
}

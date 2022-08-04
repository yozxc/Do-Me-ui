import { Observable } from 'rxjs';
import { Project } from '@app/core/types/projectType';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MAIN_PLACE_ROUTE } from '@app/core/router/nav-constants';
import { AddTaskData } from '@app/core/types/taskData';
import { AddSectionData } from '@app/core/types/section';
import { ProjectsTodosQuery } from '@app/core/store/projects/projects.query';

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

    constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef, public projectsTodosQuery: ProjectsTodosQuery) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const projectID = params.get(MAIN_PLACE_ROUTE.ID);
            if (projectID !== this.projectId) {
                projectID && (this.projectId = projectID);

                this.project$ = this.projectsTodosQuery.selectProject(this.projectId);

                this.setData();
            }
        });
    }

    setData() {
        this.cdr.detectChanges();
    }

    addNoSectionTask(e: AddTaskData) {
        // this.projectData?.noSectionTasks?.push({
        //     taskID: v4(),
        //     taskName: e.taskName,
        //     taskDescription: e.taskDescription,
        //     isChecked: false,
        //     priority: e.priority
        // });
    }

    addSection(event: AddSectionData) {
        // this.projectData?.sections.push({
        //     id: v4(),
        //     title: event.sectionTitle,
        //     tasksList: []
        // });
    }
}

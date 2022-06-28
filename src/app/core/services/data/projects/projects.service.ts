import { AddProjectData, Project } from '@app/core/types/projectType';
import { Injectable } from '@angular/core';
import { projectsList } from '@mocks/projectsList';
import { BehaviorSubject } from 'rxjs';
import { v4 } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    projectsListSub$: BehaviorSubject<Project[]> = new BehaviorSubject(projectsList);
    projectsList!: Project[];

    constructor() {
        this.projectsListSub$.subscribe((val) => (this.projectsList = val));
    }

    getProjectListSub() {
        return this.projectsListSub$;
    }

    // todo : check for error throw
    getProjectDataByID(id: string | null): Project | null {
        return projectsList.find((project) => project.id === id) || null;
    }

    addProject(project: AddProjectData) {
        this.projectsListSub$.next([
            ...this.projectsList,
            {
                id: v4(),
                title: project.title,
                colorCls: project.colorCls,
                todoTasks: 0,
                noSectionTasks: [],
                sections: []
            }
        ]);
    }
}

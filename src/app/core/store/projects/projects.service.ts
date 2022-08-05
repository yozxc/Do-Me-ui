/* eslint-disable no-unused-labels */
import { Injectable } from '@angular/core';
import { AddProjectData, Project } from '@app/core/types/domain/project';
import { projectsList } from '@mocks/projectsList';
import { v4 } from 'uuid';
import { ProjectsStore } from './projects.store';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
    constructor(private projectsStore: ProjectsStore) {}

    addProject(project: AddProjectData) {
        // todo : id from back
        this.projectsStore.add({ ...project, id: v4(), noSectionTasksID: [], sectionsID: [], todoTasks: 0 } as Project);
    }

    updateTitle(projectID: string, title: string) {
        this.projectsStore.update(projectID, { title });
    }

    // todo : dev temp
    setProjects() {
        this.projectsStore.add(projectsList as Project[]);
    }
}

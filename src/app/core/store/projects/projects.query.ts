import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProjectsState, ProjectsStore } from './projects.store';
import { Project } from '@app/core/types/projectType';

@Injectable({ providedIn: 'root' })
export class ProjectsTodosQuery extends QueryEntity<ProjectsState> {
    projects$ = this.selectAll();

    constructor(protected override store: ProjectsStore) {
        super(store);
    }

    getProject(id: string) {
        return this.getEntity(id);
    }

    selectProject(id: string) {
        return this.selectEntity(id) as Observable<Project>;
    }
}

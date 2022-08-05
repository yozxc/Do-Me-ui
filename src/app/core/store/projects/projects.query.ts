import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Project } from '@app/core/types/domain/project';
import { Observable } from 'rxjs';
import { ProjectsState, ProjectsStore } from './projects.store';

@Injectable({ providedIn: 'root' })
export class ProjectsQuery extends QueryEntity<ProjectsState> {
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

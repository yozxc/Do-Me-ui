import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Project } from '@app/core/types/projectType';

export interface ProjectsState extends EntityState<Project, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'projects' })
export class ProjectsStore extends EntityStore<ProjectsState> {
    constructor() {
        super();
    }
}

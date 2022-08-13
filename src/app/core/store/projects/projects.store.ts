import { Injectable } from '@angular/core';
import { Project } from '@app/core/types/domain/project';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { StoreFields } from '../store.fields';

export interface ProjectsState extends EntityState<Project, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: StoreFields.PROJECTS })
export class ProjectsStore extends EntityStore<ProjectsState> {
    constructor() {
        super();
    }
}

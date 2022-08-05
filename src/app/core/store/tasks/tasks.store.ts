import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Task } from '@app/core/types/domain/task';
import { StoreFields } from '../store.fields';

export interface TasksState extends EntityState<Task, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: StoreFields.TASKS })
export class TasksStore extends EntityStore<TasksState> {
    constructor() {
        super();
    }
}

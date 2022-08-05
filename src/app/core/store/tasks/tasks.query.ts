import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { TasksState, TasksStore } from './tasks.store';
import { Task } from '@app/core/types/domain/task';

@Injectable({ providedIn: 'root' })
export class TasksQuery extends QueryEntity<TasksState> {
    constructor(protected override store: TasksStore) {
        super(store);
    }

    selectTask(id: string) {
        return this.selectEntity(id) as Observable<Task>;
    }
}

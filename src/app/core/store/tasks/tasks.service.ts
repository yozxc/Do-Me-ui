/* eslint-disable no-unused-labels */
import { Injectable } from '@angular/core';
import { AddTaskData, Task } from '@app/core/types/domain/task';
import { arrayAdd } from '@datorama/akita';
import { v4 } from 'uuid';
import { ProjectsStore } from '../projects/projects.store';
import { SectionsStore } from './../sections/sections.store';
import { TasksStore } from './tasks.store';

@Injectable({ providedIn: 'root' })
export class TasksService {
    constructor(private tasksStore: TasksStore, private projectsStore: ProjectsStore, private sectionsStore: SectionsStore) {}

    addTask(taskData: AddTaskData) {
        const addTask: Task = { ...taskData, id: v4(), isChecked: false };
        this.tasksStore.add(addTask);

        taskData.projectID &&
            this.projectsStore.update(taskData.projectID, ({ noSectionTasksID }) => ({
                noSectionTasksID: arrayAdd(noSectionTasksID, addTask.id)
            }));

        taskData.sectionID &&
            this.sectionsStore.update(taskData.sectionID, ({ tasksID }) => ({
                tasksID: arrayAdd(tasksID, addTask.id)
            }));

        return addTask.id;
    }
}

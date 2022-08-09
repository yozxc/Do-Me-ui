import { LabelsStore } from './../labels/labels.store';
/* eslint-disable no-unused-labels */
import { Injectable } from '@angular/core';
import { AddTaskDTO, Task } from '@app/core/types/domain/task';
import { arrayAdd } from '@datorama/akita';
import { v4 } from 'uuid';
import { ProjectsStore } from '../projects/projects.store';
import { SectionsStore } from './../sections/sections.store';
import { TasksStore } from './tasks.store';

@Injectable({ providedIn: 'root' })
export class TasksService {
    constructor(
        private tasksStore: TasksStore,
        private projectsStore: ProjectsStore,
        private sectionsStore: SectionsStore,
        private labelsStore: LabelsStore
    ) {}

    addTask(taskData: AddTaskDTO) {
        const addTask: Task = { ...taskData, id: v4(), isChecked: false };
        this.tasksStore.add(addTask);

        if (addTask.projectID && !addTask.sectionID) {
            this.projectsStore.update(addTask.projectID, ({ noSectionTasksID }) => ({
                noSectionTasksID: arrayAdd(noSectionTasksID, addTask.id)
            }));
        }

        addTask.sectionID &&
            this.sectionsStore.update(addTask.sectionID, ({ tasksID }) => ({
                tasksID: arrayAdd(tasksID, addTask.id)
            }));

        addTask.labelsID.forEach((labelID) =>
            this.labelsStore.update(labelID, ({ tasksID }) => ({
                tasksID: arrayAdd(tasksID, addTask.id)
            }))
        );

        return addTask.id;
    }
}

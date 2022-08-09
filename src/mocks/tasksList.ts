import { Task } from '@app/core/types/domain/task';

export const taskID: Task[] = [
    {
        id: 'id1',
        name: 'todo-1',
        description: null,
        isChecked: false,
        priority: 1,
        projectID: null,
        sectionID: null,
        labelsID: []
    },
    {
        id: 'id2',
        name: 'todo-2',
        description: 'task description 2',
        isChecked: true,
        priority: 2,
        projectID: null,
        sectionID: null,
        labelsID: []
    },
    {
        id: 'id3',
        name: 'todo-3',
        description: null,
        isChecked: false,
        priority: 3,
        projectID: null,
        sectionID: null,
        labelsID: []
    },
    {
        id: 'id4',
        name: 'todo-4',
        description: null,
        isChecked: true,
        priority: 4,
        projectID: null,
        sectionID: null,
        labelsID: []
    }
];

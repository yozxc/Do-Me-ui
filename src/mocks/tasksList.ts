import { Task } from '@app/core/types/domain/task';

export const taskID: Task[] = [
    {
        id: 'id1',
        name: 'todo-1',
        isChecked: false,
        priority: 1
    },
    {
        id: 'id2',
        name: 'todo-2',
        description: 'task description 2',
        isChecked: true,
        priority: 2
    },
    {
        id: 'id3',
        name: 'todo-3',
        isChecked: false,
        priority: 3
    },
    {
        id: 'id4',
        name: 'todo-4',
        isChecked: true,
        priority: 4
    }
];

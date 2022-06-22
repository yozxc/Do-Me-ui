import { TaskData } from '@app/core/types/taskData';

export const tasksList: TaskData[] = [
    {
        taskID: 'id1',
        taskName: 'todo-1',
        isChecked: false,
        priority: 1
    },
    {
        taskID: 'id2',
        taskName: 'todo-2',
        taskDescription: 'task description 2',
        isChecked: true,
        priority: 2
    },
    {
        taskID: 'id3',
        taskName: 'todo-3',
        isChecked: false,
        priority: 3
    },
    {
        taskID: 'id4',
        taskName: 'todo-4',
        isChecked: true,
        priority: 4
    }
];

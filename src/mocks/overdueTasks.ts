import { TaskData } from '@app/core/types/taskData';

export const overdueTasksList: TaskData[] = [
    {
        taskID: 'ov_id1',
        taskName: 'todo-1',
        isChecked: false,
        priority: 2
    },
    {
        taskID: 'ov_id2',
        taskName: 'todo-2',
        taskDescription: 'task description 2',
        isChecked: true,
        priority: 4
    }
];

import { SectionData } from '@app/core/types/section';
import { TaskData } from '@app/core/types/taskData';

const tasksList1: TaskData[] = [
    {
        taskID: 'sid1',
        taskName: 'todo-1',
        isChecked: false,
        priority: 1
    },
    {
        taskID: 'sid2',
        taskName: 'todo-2',
        taskDescription: 'task description 2',
        isChecked: true,
        priority: 2
    },
    {
        taskID: 'sid3',
        taskName: 'todo-3',
        isChecked: false,
        priority: 3
    },
    {
        taskID: 'sid4',
        taskName: 'todo-4',
        isChecked: true,
        priority: 4
    }
];

const tasksList2: TaskData[] = [
    {
        taskID: 'sid11',
        taskName: 'todo-1',
        isChecked: false,
        priority: 1
    },
    {
        taskID: 'sid22',
        taskName: 'todo-2',
        taskDescription: 'task description 2',
        isChecked: true,
        priority: 2
    }
];

export const sectionsList: SectionData[] = [
    {
        id: 'sectionId1',
        title: 'sectionTest',
        tasksList: tasksList1
    },
    {
        id: 'sectionId2',
        title: 'Overdue',
        nonEditableTitle: true,
        tasksList: tasksList2
    }
];

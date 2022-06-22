import { PriorityType } from '@app/core/types/priorityType';

export interface AddTaskData {
    taskName: string;
    taskDescription: string;
    priority: PriorityType;
}

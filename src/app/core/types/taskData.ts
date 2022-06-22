import { PriorityType } from '@app/core/types/priorityType';

export interface TaskData {
    taskID: string;
    taskName: string;
    taskDescription?: string;
    isChecked: boolean;
    priority: PriorityType;
}

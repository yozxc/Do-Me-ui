import { PriorityType } from '@app/core/types/domain/priority';

export interface Task {
    id: string;
    name: string;
    description?: string;
    isChecked: boolean;
    priority: PriorityType;
    // ---
    projectID?: string;
    sectionID?: string;
}

export interface AddTaskData {
    name: string;
    description: string;
    priority: PriorityType;
    // ---
    projectID?: string;
    sectionID?: string;
}

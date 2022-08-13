import { PriorityType } from '@app/core/types/domain/priority';

export interface Task {
    id: string;
    name: string;
    description: string | null;
    isChecked: boolean;
    priority: PriorityType;
    // ---
    projectID: string | null;
    sectionID: string | null;
    labelsID: string[];
}

export interface AddTaskData {
    name: string;
    description: string | null;
    priority: PriorityType;
    // ---
    projectID: string | null;
    sectionID: string | null;
    labelsID: string[];
}

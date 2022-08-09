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

export interface AddTaskDTO {
    name: string;
    description: string;
    priority: PriorityType;
    // ---
    projectID: string | null;
    sectionID: string | null;
    labelsID: string[];
}

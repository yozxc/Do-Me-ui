import { TaskData } from '@app/core/types/taskData';

export interface SectionData {
    id: string;
    title: string;
    nonEditableTitle?: boolean;
    tasksList: TaskData[];
}

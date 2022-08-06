import { ColorType } from './color';

export interface Project {
    id: string;
    title: string;
    colorCls: ColorType;
    type: ProjectType;
    favorite: boolean;
    todoTasks: number;
    // ---
    sectionsID: string[];
    noSectionTasksID: string[];
}

export interface AddProjectData {
    title: string;
    colorCls: ColorType;
    type: 'BOARD' | 'LIST';
    favorite?: boolean;
}

export type ProjectType = 'BOARD' | 'LIST';

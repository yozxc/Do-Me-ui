import { ColorType } from './color';

export interface Project {
    id: string;
    title: string;
    colorCls: ColorType;
    type: ViewType;
    favorite: boolean;
    todoTasks: number;
    // ---
    sectionsID: string[];
    noSectionTasksID: string[];
}

export interface AddProjectDTO {
    title: string;
    colorCls: ColorType;
    type: 'BOARD' | 'LIST';
    favorite: boolean;
    // ---
    sectionsID: string[];
    noSectionTasksID: string[];
}

export type ViewType = 'BOARD' | 'LIST';

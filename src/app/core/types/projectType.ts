import { ColorType } from './color';
import { SectionData } from './section';
import { TaskData } from './taskData';

export interface Project {
    id: string;
    title: string;
    colorCls: ColorType;
    type: 'BOARD' | 'LIST';
    favorite: boolean;
    noSectionTasks: TaskData[];
    sections: SectionData[];
    todoTasks: number;
}

export interface AddProjectData {
    title: string;
    colorCls: ColorType;
    type: 'BOARD' | 'LIST';
    favorite?: boolean;
}

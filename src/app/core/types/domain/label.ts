import { ColorType } from './color';

export interface Label {
    id: string;
    name: string;
    colorCls: ColorType;
    favorites: boolean;
    // ---
    tasksID: string[];
}

export interface AddLabelDTO {
    name: string;
    colorCls: ColorType;
    favorites: boolean;
    // ---
    tasksID: string[];
}

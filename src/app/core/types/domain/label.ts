import { ColorType } from './color';

export interface Label {
    id: string;
    name: string;
    colorCls: ColorType;
    favorites: boolean;
    // ---
    tasksID: string[];
}

export interface AddLabelData {
    name: string;
    colorCls: ColorType;
    favorites: boolean;
    // ---
    tasksID: string[];
}

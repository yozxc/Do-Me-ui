import { PriorityType } from './priorityType';

export type DropdownIconType =
    | 'ADD_ABOVE'
    | 'ADD_BELOW'
    | 'GO_TO'
    | 'EDIT'
    | 'FAVORITES'
    | 'ADD_SECTION'
    | 'SHOW_TASK'
    | 'HIDE_TASK'
    | 'MOVE_TO'
    | 'ARCHIVE'
    | 'DEL';

export type DropdownAdditional = 'BAR' | 'PRIORITY' | 'SCHEDULE';

export interface DropdownField {
    iconType: DropdownIconType;
    text: string;
}

export interface DropdownBar {
    typeBar: boolean;
}

export interface DropdownPriority {
    typePriority: boolean;
    priority: PriorityType;
}

export interface DropdownSchedule {
    typeSchedule: boolean;
}

export type DropdownSchemaElement = DropdownField | DropdownBar | DropdownPriority | DropdownSchedule;

export type DropdownSchema = DropdownSchemaElement[];

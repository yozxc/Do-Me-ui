import { PriorityType } from './priorityType';

export enum DropdownIconType {
    ADD_ABOVE = 'ADD_ABOVE',
    ADD_BELOW = 'ADD_BELOW',
    GO_TO = 'GO_TO',
    EDIT = 'EDIT',
    FAVORITES = 'FAVORITES',
    ADD_SECTION = 'ADD_SECTION',
    SHOW_TASK = 'SHOW_TASK',
    HIDE_TASK = 'HIDE_TASK',
    MOVE_TO = 'MOVE_TO',
    ARCHIVE = 'ARCHIVE',
    DEL = 'DEL'
}

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

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { v4 } from 'uuid';
import { tasksList } from '@mocks/tasksList';
import { sectionsList } from '@mocks/sectionsTasks';
import { AddSectionData, SectionData } from '@app/core/types/section';
import { AddTaskData, TaskData } from '@app/core/types/taskData';
import { DropdownIconType, DropdownSchema } from '@app/core/types/dropdown';

@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayComponent {
    taskEditorState: boolean = false;
    date: number = Date.now();

    tasksList: TaskData[] = tasksList;
    sectionsList: SectionData[] = sectionsList;

    headerDropdownSchema: DropdownSchema = headerDropdownSchema;

    constructor() {}

    addTask(event: AddTaskData) {
        this.tasksList.push({
            taskID: v4(),
            taskName: event.taskName,
            taskDescription: event.taskDescription,
            isChecked: false,
            priority: event.priority
        });
    }

    addSection(event: AddSectionData) {
        this.sectionsList.push({
            id: v4(),
            title: event.sectionTitle,
            tasksList: []
        });
    }
}

const headerDropdownSchema: DropdownSchema = [
    {
        iconType: DropdownIconType.ADD_ABOVE,
        text: ''
    },
    {
        iconType: DropdownIconType.ADD_BELOW,
        text: ''
    },
    {
        iconType: DropdownIconType.GO_TO,
        text: ''
    },
    {
        iconType: DropdownIconType.EDIT,
        text: ''
    },
    {
        iconType: DropdownIconType.FAVORITES,
        text: ''
    },
    {
        iconType: DropdownIconType.ADD_SECTION,
        text: ''
    },
    {
        iconType: DropdownIconType.SHOW_TASK,
        text: ''
    },
    {
        iconType: DropdownIconType.HIDE_TASK,
        text: ''
    },
    {
        iconType: DropdownIconType.MOVE_TO,
        text: ''
    },
    {
        iconType: DropdownIconType.ARCHIVE,
        text: ''
    },
    {
        iconType: DropdownIconType.DEL,
        text: ''
    }
];

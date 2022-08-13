import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownIconType, DropdownSchema } from '@app/core/types/domain/dropdown';
import { AddSectionData } from '@app/core/types/domain/section';
import { AddTaskData } from '@app/core/types/domain/task';

@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayComponent {
    date: number = Date.now();

    // taskID: Task[] = taskID;
    // sectionsList: Section[] = sectionsList;

    headerDropdownSchema: DropdownSchema = headerDropdownSchema;

    constructor() {}

    addTask(event: AddTaskData) {
        // this.taskID.push({
        //     id: v4(),
        //     name: event.name,
        //     description: event.description,
        //     isChecked: false,
        //     priority: event.priority
        // });
    }

    addSection(event: AddSectionData) {
        // this.sectionsList.push({
        //     id: v4(),
        //     title: event.title,
        //     tasksID: []
        // });
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

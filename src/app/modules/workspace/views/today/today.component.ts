import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddTaskData } from '@core/types/addTaskData';
import { TaskData } from '@app/core/types/taskData';
import { v4 } from 'uuid';
import { tasksList } from '@mocks/tasksList';
import { sectionsList } from '@mocks/sectionsTasks';
import { SectionData } from '@app/core/types/section';
import { AddSectionData } from '@app/core/types/addSectionData';

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

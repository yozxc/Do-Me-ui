import { ChangeDetectionStrategy, Component } from '@angular/core';
import { v4 } from 'uuid';
import { TaskData } from '@app/core/types/taskData';
import { AddTaskData } from '@core/types/addTaskData';
import { tasksList } from '@mocks/tasksList';
import { overdueTasksList } from '@mocks/overdueTasks';

@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodayComponent {
    date: number = Date.now();

    tasksList: TaskData[] = tasksList as TaskData[];
    overdueTasksList: TaskData[] = overdueTasksList as TaskData[];

    constructor() {}

    addTask(event: AddTaskData) {
        this.tasksList.push({
            taskID: v4(),
            taskName: event.taskName,
            isChecked: false
        });
    }
}

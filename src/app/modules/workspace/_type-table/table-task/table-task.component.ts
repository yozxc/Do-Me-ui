import { TasksQuery } from '@core/store/tasks/tasks.query';
import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { v4 } from 'uuid';
import { Task } from '@app/core/types/domain/task';

@Component({
    selector: 'app-table-task',
    templateUrl: './table-task.component.html',
    styleUrls: ['./table-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableTaskComponent implements OnInit {
    isChecked!: boolean;

    checkboxID = v4();
    title: string = 'zxc';

    @Input() taskID!: string;
    taskData!: Task;

    constructor(private tasksQuery: TasksQuery) {}

    ngOnInit(): void {
        this.taskData = this.tasksQuery.getTask(this.taskID) || this.taskData;

        console.log(this.taskData);
    }
}

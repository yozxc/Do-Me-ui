import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { LabelsQuery } from '@app/core/store/labels/labels.query';
import { Label } from '@app/core/types/domain/label';
import { Task } from '@app/core/types/domain/task';
import { TasksQuery } from '@core/store/tasks/tasks.query';
import { Observable } from 'rxjs';
import { v4 } from 'uuid';

@Component({
    selector: 'app-board-task[taskID]',
    templateUrl: './board-task.component.html',
    styleUrls: ['./board-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardTaskComponent implements OnInit {
    isChecked!: boolean;

    checkboxID = v4();
    title: string = 'zxc';

    @Input() taskID!: string;

    task$!: Observable<Task>;

    constructor(private tasksQuery: TasksQuery, private labelsQuery: LabelsQuery) {}

    ngOnInit(): void {
        this.task$ = this.tasksQuery.selectTask(this.taskID);
    }

    getLabel(id: string): Label | undefined {
        return this.labelsQuery.getLabel(id);
    }
}

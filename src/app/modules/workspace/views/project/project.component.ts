import { tasksList } from '@mocks/tasksList';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskData } from '@app/core/types/taskData';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
    tasksList: TaskData[] = tasksList;

    @Input() projID: number = 123;

    constructor() {}
}

import { TasksService } from '@core/store/tasks/tasks.service';
import { TitleEdit } from '@core/types/realization/titleEdit';
import { LabelsQuery } from '@core/store/labels/labels.query';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Label } from '@app/core/types/domain/label';
import { Observable } from 'rxjs';
import { MAIN_PLACE_ROUTE } from '@app/core/router/nav-constants';
import { LabelsService } from '@app/core/store/labels/labels.service';
import { AddTaskDTO } from '@app/core/types/domain/task';

@Component({
    selector: 'app-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnInit {
    // todo : check for local state var names
    __addTask: boolean = false;

    labelID!: string;

    label$!: Observable<Label>;

    constructor(
        private cdr: ChangeDetectorRef,
        private route: ActivatedRoute,
        private tasksService: TasksService,
        private labelsService: LabelsService,
        private labelsQuery: LabelsQuery
    ) {}

    ngOnInit(): void {
        // todo : check for simpify
        this.route.paramMap.subscribe((params) => {
            const labelID = params.get(MAIN_PLACE_ROUTE.ID);
            if (labelID !== this.labelID) {
                labelID && (this.labelID = labelID);

                this.label$ = this.labelsQuery.selectLabel(this.labelID);

                this.cdr.detectChanges();
            }
        });
    }

    addTask(task: AddTaskDTO) {
        this.tasksService.addTask(task);
    }

    updateName(titleEdit: TitleEdit) {
        this.labelsService.updateName(this.labelID, titleEdit.newValue);
    }
}

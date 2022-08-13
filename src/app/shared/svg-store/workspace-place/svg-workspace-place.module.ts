import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WpEmptyLabelComponent } from './wp-empty-label.component';
import { WpHeaderArrowComponent } from './wp-header-arrow.component';
import { WpHeaderMoreComponent } from './wp-header-more.component';
import { WpInboxComponent } from './wp-inbox.component';
import { WpLabelComponent } from './wp-label.component';
import { WpMoreComponent } from './wp-more.component';
import { WpPriorityComponent } from './wp-priority.component';
import { WpScheduleComponent } from './wp-schedule.component';
import { WpTaskAddComponent } from './wp-task-add.component';
import { WpTaskDragComponent } from './wp-task-drag.component';
import { WpTaskEditComponent } from './wp-task-edit.component';
import { WpTaskLateComponent } from './wp-task-late.component';
import { WpTaskMoreComponent } from './wp-task-more.component';
import { WpTaskScheduleComponent } from './wp-task-schedule.component';
import { WpTickComponent } from './wp-tick.component';
import { WpViewComponent } from './wp-view.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        WpViewComponent,
        WpMoreComponent,
        WpTickComponent,
        WpTaskLateComponent,
        WpTaskEditComponent,
        WpTaskScheduleComponent,
        WpTaskMoreComponent,
        WpTaskDragComponent,
        WpTaskAddComponent,
        WpScheduleComponent,
        WpInboxComponent,
        WpLabelComponent,
        WpPriorityComponent,
        WpHeaderMoreComponent,
        WpHeaderArrowComponent,
        WpEmptyLabelComponent
    ],
    exports: [
        WpViewComponent,
        WpMoreComponent,
        WpTickComponent,
        WpTaskLateComponent,
        WpTaskEditComponent,
        WpTaskScheduleComponent,
        WpTaskMoreComponent,
        WpTaskDragComponent,
        WpTaskAddComponent,
        WpScheduleComponent,
        WpInboxComponent,
        WpLabelComponent,
        WpPriorityComponent,
        WpHeaderMoreComponent,
        WpHeaderArrowComponent,
        WpEmptyLabelComponent
    ]
})
export class SvgWorkspacePlaceModule {}

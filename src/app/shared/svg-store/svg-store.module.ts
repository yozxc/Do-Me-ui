import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './header/header-menu.component';
import { HeaderHomeComponent } from './header/header-home.component';
import { SearchLoupeComponent } from './header/search-loupe.component';
import { SearchCloseComponent } from './header/search-close.component';
import { HeaderAddComponent } from './header/header-add.component';
import { HeaderHelpComponent } from './header/header-help.component';
import { HeaderBellComponent } from './header/header-bell.component';

import { LmInboxComponent } from './left-menu/lm-inbox.component';
import { LmTodayComponent } from './left-menu/lm-today.component';
import { LmUpcomingComponent } from './left-menu/lm-upcoming.component';
import { LmDotComponent } from './left-menu/lm-dot.component';
import { LmPlusComponent } from './left-menu/lm-plus.component';
import { LmMoreComponent } from './left-menu/lm-more.component';
import { LmDragComponent } from './left-menu/lm-drag.component';
import { LmLabelComponent } from './left-menu/lm-label.component';
import { LmFilterComponent } from './left-menu/lm-filter.component';

import { MpViewComponent } from './main-place/mp-view.component';
import { MpMoreComponent } from './main-place/mp-more.component';
import { MpTickComponent } from './main-place/mp-tick.component';
import { MpTaskLateComponent } from './main-place/mp-task-late.component';
import { MpTaskEditComponent } from './main-place/mp-task-edit.component';
import { MpTaskScheduleComponent } from './main-place/mp-task-schedule.component';
import { MpTaskMoreComponent } from './main-place/mp-task-more.component';
import { MpTaskDragComponent } from './main-place/mp-task-drag.component';
import { MpTaskAddComponent } from './main-place/mp-task-add.component';
import { MpScheduleComponent } from './main-place/mp-schedule.component';
import { MpInboxComponent } from './main-place/mp-inbox.component';
import { MpLabelComponent } from './main-place/mp-label.component';
import { MpPriorityComponent } from './main-place/mp-priority.component';
import { MpHeaderMoreComponent } from './main-place/mp-header-more.component';
import { MpHeaderArrowComponent } from './main-place/mp-header-arrow.component';

@NgModule({
    declarations: [
        ...[
            HeaderMenuComponent,
            HeaderHomeComponent,
            SearchLoupeComponent,
            SearchCloseComponent,
            HeaderAddComponent,
            HeaderHelpComponent,
            HeaderBellComponent,
            LmInboxComponent,
            LmTodayComponent,
            LmUpcomingComponent,
            LmDotComponent,
            LmPlusComponent,
            LmMoreComponent,
            LmDragComponent,
            LmLabelComponent,
            LmFilterComponent,
            MpViewComponent,
            MpMoreComponent,
            MpTickComponent,
            MpTaskLateComponent,
            MpTaskEditComponent,
            MpTaskScheduleComponent,
            MpTaskMoreComponent,
            MpTaskDragComponent,
            MpTaskAddComponent,
            MpScheduleComponent,
            MpInboxComponent,
            MpLabelComponent,
            MpPriorityComponent,
        ],
        MpHeaderMoreComponent,
        MpHeaderArrowComponent,
    ],
    exports: [
        ...[
            HeaderMenuComponent,
            HeaderHomeComponent,
            SearchLoupeComponent,
            SearchCloseComponent,
            HeaderAddComponent,
            HeaderHelpComponent,
            HeaderBellComponent,
            LmInboxComponent,
            LmTodayComponent,
            LmUpcomingComponent,
            LmDotComponent,
            LmPlusComponent,
            LmMoreComponent,
            LmDragComponent,
            LmLabelComponent,
            LmFilterComponent,
            MpViewComponent,
            MpMoreComponent,
            MpTickComponent,
            MpTaskLateComponent,
            MpTaskEditComponent,
            MpTaskScheduleComponent,
            MpTaskMoreComponent,
            MpTaskDragComponent,
            MpTaskAddComponent,
            MpScheduleComponent,
            MpInboxComponent,
            MpLabelComponent,
            MpPriorityComponent,
        ],
        MpHeaderMoreComponent,
        MpHeaderArrowComponent,
    ],
    imports: [CommonModule],
})
export class SvgStoreModule {}

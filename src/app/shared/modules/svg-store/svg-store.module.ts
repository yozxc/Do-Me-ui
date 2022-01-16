import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './components/header/header-menu.component';
import { HeaderHomeComponent } from './components/header/header-home.component';
import { SearchLoupeComponent } from './components/header/search-loupe.component';
import { SearchCloseComponent } from './components/header/search-close.component';
import { HeaderAddComponent } from './components/header/header-add.component';
import { HeaderHelpComponent } from './components/header/header-help.component';
import { HeaderBellComponent } from './components/header/header-bell.component';

import { LmInboxComponent } from './components/left-menu/lm-inbox.component';
import { LmTodayComponent } from './components/left-menu/lm-today.component';
import { LmUpcomingComponent } from './components/left-menu/lm-upcoming.component';
import { LmDotComponent } from './components/left-menu/lm-dot.component';
import { LmPlusComponent } from './components/left-menu/lm-plus.component';
import { LmMoreComponent } from './components/left-menu/lm-more.component';
import { LmDragComponent } from './components/left-menu/lm-drag.component';
import { LmLabelComponent } from './components/left-menu/lm-label.component';
import { LmFilterComponent } from './components/left-menu/lm-filter.component';

import { MpViewComponent } from './components/main-place/mp-view.component';
import { MpMoreComponent } from './components/main-place/mp-more.component';
import { MpTickComponent } from './components/main-place/mp-tick.component';
import { MpTaskLateComponent } from './components/main-place/mp-task-late.component';
import { MpTaskEditComponent } from './components/main-place/mp-task-edit.component';
import { MpTaskScheduleComponent } from './components/main-place/mp-task-schedule.component';
import { MpTaskMoreComponent } from './components/main-place/mp-task-more.component';
import { MpTaskDragComponent } from './components/main-place/mp-task-drag.component';
import { MpTaskAddComponent } from './components/main-place/mp-task-add.component';
import { MpScheduleComponent } from './components/main-place/mp-schedule.component';
import { MpInboxComponent } from './components/main-place/mp-inbox.component';
import { MpLabelComponent } from './components/main-place/mp-label.component';
import { MpPriorityComponent } from './components/main-place/mp-priority.component';

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
    ],
    imports: [CommonModule],
})
export class SvgStoreModule {}

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

import { WpViewComponent } from './workspace-place/wp-view.component';
import { WpMoreComponent } from './workspace-place/wp-more.component';
import { WpTickComponent } from './workspace-place/wp-tick.component';
import { WpTaskLateComponent } from './workspace-place/wp-task-late.component';
import { WpTaskEditComponent } from './workspace-place/wp-task-edit.component';
import { WpTaskScheduleComponent } from './workspace-place/wp-task-schedule.component';
import { WpTaskMoreComponent } from './workspace-place/wp-task-more.component';
import { WpTaskDragComponent } from './workspace-place/wp-task-drag.component';
import { WpTaskAddComponent } from './workspace-place/wp-task-add.component';
import { WpScheduleComponent } from './workspace-place/wp-schedule.component';
import { WpInboxComponent } from './workspace-place/wp-inbox.component';
import { WpLabelComponent } from './workspace-place/wp-label.component';
import { WpPriorityComponent } from './workspace-place/wp-priority.component';
import { WpHeaderMoreComponent } from './workspace-place/wp-header-more.component';
import { WpHeaderArrowComponent } from './workspace-place/wp-header-arrow.component';

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
        ],
        WpHeaderMoreComponent,
        WpHeaderArrowComponent,
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
        ],
        WpHeaderMoreComponent,
        WpHeaderArrowComponent,
    ],
    imports: [CommonModule],
})
export class SvgStoreModule {}

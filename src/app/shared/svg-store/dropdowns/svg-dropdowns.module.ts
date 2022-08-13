import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgDropAddAboveComponent } from './drop-add-above.component';
import { SvgDropAddBelowComponent } from './drop-add-below.component';
import { SvgDropAddSectionComponent } from './drop-add-section.component';
import { SvgAddTaskSectionComponent } from './drop-add-task-section';
import { SvgDropArchiveComponent } from './drop-archive.component';
import { SvgDropDeleteComponent } from './drop-delete.component';
import { SvgDropEditComponent } from './drop-edit.component';
import { SvgDropFavoritesComponent } from './drop-favorites.component';
import { SvgDropGoToComponent } from './drop-go-to.component';
import { SvgDropHideTasksComponent } from './drop-hide-tasks.component';
import { SvgDropMoveToComponent } from './drop-move-to.component';
import { SvgDropSecLaterWeekComponent } from './drop-sec-later-week.component';
import { SvgDropSecNextWeekComponent } from './drop-sec-next-week.component';
import { SvgDropSecNoDateComponent } from './drop-sec-no-date.component';
import { SvgDropSecPriorityComponent } from './drop-sec-priority.component';
import { SvgDropSecThisWeekendComponent } from './drop-sec-this-weekend.component';
import { SvgDropSecTickComponent } from './drop-sec-tick.component';
import { SvgDropSecTodayComponent } from './drop-sec-today.component';
import { SvgDropSecTomorrowComponent } from './drop-sec-tomorrow.component';
import { SvgDropShowTasksComponent } from './drop-show-tasks.component';

import { SvgDropArrowComponent } from './drop-arrow.component';
import { SvgDropGroupByComponent } from './drop-group-by.component';
import { SvgDropSortByComponent } from './drop-sort-by.component';
import { SvgDropViewAsComponent } from './drop-view-as.component';

import { SvgDropSubTickComponent } from './drop-sub-tick.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        SvgDropEditComponent,
        SvgDropFavoritesComponent,
        SvgDropAddAboveComponent,
        SvgDropAddBelowComponent,
        SvgDropDeleteComponent,
        SvgDropArchiveComponent,
        SvgDropAddSectionComponent,
        SvgDropShowTasksComponent,
        SvgDropHideTasksComponent,
        SvgDropMoveToComponent,
        SvgDropGoToComponent,
        SvgDropSecTodayComponent,
        SvgDropSecTomorrowComponent,
        SvgDropSecThisWeekendComponent,
        SvgDropSecLaterWeekComponent,
        SvgDropSecNextWeekComponent,
        SvgDropSecNoDateComponent,
        SvgDropSecPriorityComponent,
        SvgDropSecTickComponent,
        SvgAddTaskSectionComponent,
        //
        SvgDropArrowComponent,
        SvgDropViewAsComponent,
        SvgDropGroupByComponent,
        SvgDropSortByComponent,
        //
        SvgDropSubTickComponent
    ],
    exports: [
        SvgDropEditComponent,
        SvgDropFavoritesComponent,
        SvgDropAddAboveComponent,
        SvgDropAddBelowComponent,
        SvgDropDeleteComponent,
        SvgDropArchiveComponent,
        SvgDropAddSectionComponent,
        SvgDropShowTasksComponent,
        SvgDropHideTasksComponent,
        SvgDropMoveToComponent,
        SvgDropGoToComponent,
        SvgDropSecTodayComponent,
        SvgDropSecTomorrowComponent,
        SvgDropSecThisWeekendComponent,
        SvgDropSecLaterWeekComponent,
        SvgDropSecNextWeekComponent,
        SvgDropSecNoDateComponent,
        SvgDropSecPriorityComponent,
        SvgDropSecTickComponent,
        SvgAddTaskSectionComponent,
        //
        SvgDropArrowComponent,
        SvgDropViewAsComponent,
        SvgDropGroupByComponent,
        SvgDropSortByComponent,
        //
        SvgDropSubTickComponent
    ]
})
export class SvgDropdownsModule {}

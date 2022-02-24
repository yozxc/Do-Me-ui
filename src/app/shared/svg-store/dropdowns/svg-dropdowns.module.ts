import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDropEditComponent } from './drop-edit.component';
import { SvgDropFavoritesComponent } from './drop-favorites.component';
import { SvgDropAddAboveComponent } from './drop-add-above.component';
import { SvgDropAddBelowComponent } from './drop-add-below.component';
import { SvgDropDeleteComponent } from './drop-delete.component';
import { SvgDropArchiveComponent } from './drop-archive.component';
import { SvgDropAddSectionComponent } from './drop-add-section.component';
import { SvgDropShowTasksComponent } from './drop-show-tasks.component';
import { SvgDropHideTasksComponent } from './drop-hide-tasks.component';
import { SvgDropMoveToComponent } from './drop-move-to.component';
import { SvgDropSecTodayComponent } from './drop-sec-today.component';
import { SvgDropSecTomorrowComponent } from './drop-sec-tomorrow.component';
import { SvgDropSecThisWeekendComponent } from './drop-sec-this-weekend.component';
import { SvgDropSecLaterWeekComponent } from './drop-sec-later-week.component';
import { SvgDropSecNextWeekComponent } from './drop-sec-next-week.component';
import { SvgDropSecNoDateComponent } from './drop-sec-no-date.component';
import { SvgDropSecPriorityComponent } from './drop-sec-priority.component';

import { SvgDropViewAsComponent } from './drop-view-as.component';
import { SvgDropArrowComponent } from './drop-arrow.component';
import { SvgDropGroupByComponent } from './drop-group-by.component';
import { SvgDropSortByComponent } from './drop-sort-by.component';

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
        SvgDropSecTodayComponent,
        SvgDropSecTomorrowComponent,
        SvgDropSecThisWeekendComponent,
        SvgDropSecLaterWeekComponent,
        SvgDropSecNextWeekComponent,
        SvgDropSecNoDateComponent,
        SvgDropSecPriorityComponent,
        //
        SvgDropArrowComponent,
        SvgDropViewAsComponent,
        SvgDropGroupByComponent,
        SvgDropSortByComponent,
        //
        SvgDropSubTickComponent,
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
        SvgDropSecTodayComponent,
        SvgDropSecTomorrowComponent,
        SvgDropSecThisWeekendComponent,
        SvgDropSecLaterWeekComponent,
        SvgDropSecNextWeekComponent,
        SvgDropSecNoDateComponent,
        SvgDropSecPriorityComponent,
        //
        SvgDropArrowComponent,
        SvgDropViewAsComponent,
        SvgDropGroupByComponent,
        SvgDropSortByComponent,
        //
        SvgDropSubTickComponent,
    ],
})
export class SvgDropdownsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LmDotComponent } from './lm-dot.component';
import { LmDragComponent } from './lm-drag.component';
import { LmFilterComponent } from './lm-filter.component';
import { LmInboxComponent } from './lm-inbox.component';
import { LmLabelComponent } from './lm-label.component';
import { LmMoreComponent } from './lm-more.component';
import { LmPlusComponent } from './lm-plus.component';
import { LmTodayComponent } from './lm-today.component';
import { LmUpcomingComponent } from './lm-upcoming.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        LmInboxComponent,
        LmTodayComponent,
        LmUpcomingComponent,
        LmDotComponent,
        LmPlusComponent,
        LmMoreComponent,
        LmDragComponent,
        LmLabelComponent,
        LmFilterComponent
    ],
    exports: [
        LmInboxComponent,
        LmTodayComponent,
        LmUpcomingComponent,
        LmDotComponent,
        LmPlusComponent,
        LmMoreComponent,
        LmDragComponent,
        LmLabelComponent,
        LmFilterComponent
    ]
})
export class SvgLeftMenuModule {}

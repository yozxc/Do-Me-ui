import { Routes } from '@angular/router';

import { MAIN_PLACE_ROUTE } from './nav-constants';

import { FilterComponent } from '@app/modules/workspace/views/filter/filter.component';
import { InboxComponent } from '@app/modules/workspace/views/inbox/inbox.component';
import { LabelComponent } from '@app/modules/workspace/views/label/label.component';
import { ProjectComponent } from '@app/modules/workspace/views/project/project.component';
import { TodayComponent } from '@app/modules/workspace/views/today/today.component';

export const mainPlaceRoutes: Routes = [
    { path: ``, redirectTo: `${MAIN_PLACE_ROUTE.TODAY}`, pathMatch: 'full' },
    { path: `${MAIN_PLACE_ROUTE.TODAY}`, component: TodayComponent },
    { path: `${MAIN_PLACE_ROUTE.INBOX}`, component: InboxComponent },
    { path: `${MAIN_PLACE_ROUTE.PROJECT}/:${MAIN_PLACE_ROUTE.ID}`, component: ProjectComponent },
    { path: `${MAIN_PLACE_ROUTE.LABEL}/:${MAIN_PLACE_ROUTE.ID}`, component: LabelComponent },
    { path: `${MAIN_PLACE_ROUTE.FILTER}/:${MAIN_PLACE_ROUTE.ID}`, component: FilterComponent }
];

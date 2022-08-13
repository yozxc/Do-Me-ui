import { Routes } from '@angular/router';

import { WORKSPACE_ROUTE } from './nav-constants';

import { FilterComponent } from '@app/modules/workspace/views/filter/filter.component';
import { InboxComponent } from '@app/modules/workspace/views/inbox/inbox.component';
import { LabelComponent } from '@app/modules/workspace/views/label/label.component';
import { ProjectComponent } from '@app/modules/workspace/views/project/project.component';
import { TodayComponent } from '@app/modules/workspace/views/today/today.component';

export const workspaceRoutes: Routes = [
    { path: ``, redirectTo: `${WORKSPACE_ROUTE.INBOX}`, pathMatch: 'full' },
    { path: `${WORKSPACE_ROUTE.TODAY}`, component: TodayComponent },
    { path: `${WORKSPACE_ROUTE.INBOX}`, component: InboxComponent },
    { path: `${WORKSPACE_ROUTE.PROJECT}/:${WORKSPACE_ROUTE.ID}`, component: ProjectComponent },
    { path: `${WORKSPACE_ROUTE.LABEL}/:${WORKSPACE_ROUTE.ID}`, component: LabelComponent },
    { path: `${WORKSPACE_ROUTE.FILTER}/:${WORKSPACE_ROUTE.ID}`, component: FilterComponent }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PAGES_ROUTE } from './core/router/nav-constants';
import { modalsRoutes } from './core/router/modals-injectable-routes';
import { mainPlaceRoutes } from './core/router/main-place-injectable-routes';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

import { WorkspaceComponent } from './modules/workspace/workspace.component';

const mainRoutes: Routes = [
    {
        path: `${PAGES_ROUTE.WORKSPACE}`,
        component: WorkspaceComponent,
        children: [...modalsRoutes, ...mainPlaceRoutes]
    },

    // todo : dev temp | should be 404 page
    { path: `**`, redirectTo: `${PAGES_ROUTE.WORKSPACE}`, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(mainRoutes), AuthRoutingModule],
    exports: [RouterModule]
})
export class AppRoutingModule {}

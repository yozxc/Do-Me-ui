import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProjectComponent } from './add-project/add-project.component';
import { AddLabelComponent } from './add-label/add-label.component';
import { AddFilterComponent } from './add-filter/add-filter.component';

export enum ROUTE {
    ADDPROJECT = 'addProject',
    ADDLABEL = 'addLabel',
    ADDFILTER = 'addFilter',
}

const routes: Routes = [
    { path: `${ROUTE.ADDPROJECT}`, component: AddProjectComponent, outlet: 'MODALS' },
    { path: `${ROUTE.ADDPROJECT}`, component: AddLabelComponent, outlet: 'MODALS' },
    { path: `${ROUTE.ADDPROJECT}`, component: AddFilterComponent, outlet: 'MODALS' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class ModalsRoutingModule {}

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgStoreModule } from '@shared/svg-store/svg-store.module';
import { UiComponentsModule } from '@shared/ui-components/ui-components.module';
import { ModalsModule } from '../modals/modals.module';

import { HeaderComponent } from './components/header/header.component';
import { WorkspaceComponent } from './components/workspace.component';
import { SearchComponent } from './components/search/search.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { WorkspacePlaceComponent } from './components/workspace-place/workspace-place.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { ListAddTaskComponent } from './components/list-add-task/list-add-task.component';
import { WorkspacePlaceSubListComponent } from './components/workspace-place-sub-list/workspace-place-sub-list.component';

import { LmStateService } from './components/left-menu/lm-state.service';

@NgModule({
    imports: [CommonModule, SvgStoreModule, UiComponentsModule, ModalsModule, RouterModule],
    providers: [LmStateService],
    declarations: [
        HeaderComponent,
        WorkspaceComponent,
        SearchComponent,
        LeftMenuComponent,
        WorkspacePlaceComponent,
        ListTaskComponent,
        ListAddTaskComponent,
        WorkspacePlaceSubListComponent,
    ],
    exports: [WorkspaceComponent],
})
export class WorkspaceModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiComponentsModule } from '@shared/ui-components/ui-components.module';
import { ModalsModule } from '../modals/modals.module';
import { SvgWorkspacePlaceModule } from '@app/shared/svg-store/workspace-place/svg-workspace-place.module';
import { SvgHeaderModule } from '@app/shared/svg-store/header/svg-header.module';
import { SvgLeftMenuModule } from '@app/shared/svg-store/left-menu/svg-left-menu.module';

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
    imports: [
        CommonModule,
        RouterModule,
        SvgWorkspacePlaceModule,
        SvgHeaderModule,
        SvgLeftMenuModule,
        UiComponentsModule,
        ModalsModule,
    ],
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

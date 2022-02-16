import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiComponentsModule } from '@shared/ui-components/ui-components.module';
import { ModalsModule } from '../modals/modals.module';
import { SvgWorkspacePlaceModule } from '@app/shared/svg-store/workspace-place/svg-workspace-place.module';
import { SvgHeaderModule } from '@app/shared/svg-store/header/svg-header.module';
import { SvgLeftMenuModule } from '@app/shared/svg-store/left-menu/svg-left-menu.module';

import { HeaderComponent } from './header/header.component';
import { WorkspaceComponent } from './workspace.component';
import { SearchComponent } from './search/search.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { WpListComponent } from './wp-list/wp-list.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { ListAddTaskComponent } from './list-add-task/list-add-task.component';
import { WpSubListComponent } from './wp-sub-list/wp-sub-list.component';
import { WpAddSectionComponent } from './wp-add-section/wp-add-section.component';

import { LmStateService } from './left-menu/lm-state.service';

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
        WpListComponent,
        ListTaskComponent,
        ListAddTaskComponent,
        WpSubListComponent,
        WpAddSectionComponent,
    ],
    exports: [WorkspaceComponent],
})
export class WorkspaceModule {}

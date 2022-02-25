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
import { ListTaskComponent } from './_type-list/list-task/list-task.component';
import { ListAddTaskComponent } from './_type-list/list-add-task/list-add-task.component';
import { ListSubListComponent } from './_type-list/list-sub-list/list-sub-list.component';
import { ListAddSectionComponent } from './_type-list/list-add-section/list-add-section.component';

import { LmStateService } from './left-menu/lm-state.service';
import { TodayComponent } from './main-place/today/today.component';
import { InboxComponent } from './main-place/inbox/inbox.component';
import { ListHeaderComponent } from './_type-list/list-header/list-header.component';
import { ProjectComponent } from './main-place/project/project.component';
import { LabelComponent } from './main-place/label/label.component';
import { FilterComponent } from './main-place/filter/filter.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SvgWorkspacePlaceModule,
        SvgHeaderModule,
        SvgLeftMenuModule,
        UiComponentsModule,
        ModalsModule
    ],
    providers: [LmStateService],
    declarations: [
        HeaderComponent,
        WorkspaceComponent,
        SearchComponent,
        LeftMenuComponent,
        ListTaskComponent,
        ListAddTaskComponent,
        ListSubListComponent,
        ListAddSectionComponent,
        TodayComponent,
        InboxComponent,
        ListHeaderComponent,
        ProjectComponent,
        LabelComponent,
        FilterComponent
    ],
    exports: [WorkspaceComponent]
})
export class WorkspaceModule {}

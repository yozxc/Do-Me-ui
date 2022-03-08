import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiComponentsModule } from '@shared/ui-components/ui-components.module';
import { ModalsModule } from '../modals/modals.module';
import { SvgWorkspacePlaceModule } from '@app/shared/svg-store/workspace-place/svg-workspace-place.module';
import { SvgHeaderModule } from '@app/shared/svg-store/header/svg-header.module';
import { SvgLeftMenuModule } from '@app/shared/svg-store/left-menu/svg-left-menu.module';
import { SvgDropdownsModule } from '@app//shared/svg-store/dropdowns/svg-dropdowns.module';

import { HeaderComponent } from './header/header.component';
import { WorkspaceComponent } from './workspace.component';
import { SearchComponent } from './search/search.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ListTaskComponent } from './_type-list/list-task/list-task.component';
import { ListAddTaskComponent } from './_type-list/list-add-task/list-add-task.component';
import { ListSubListComponent } from './_type-list/list-sub-list/list-sub-list.component';
import { ListAddSectionComponent } from './_type-list/list-add-section/list-add-section.component';
import { TableHeaderComponent } from './_type-table/table-header/table-header.component';
import { TableColumnComponent } from './_type-table/table-column/table-column.component';
import { TableColumnHeaderComponent } from './_type-table/table-column-header/table-column-header.component';

import { LmStateService } from './left-menu/lm-state.service';
import { TodayComponent } from './main-place/today/today.component';
import { InboxComponent } from './main-place/inbox/inbox.component';
import { ListHeaderComponent } from './_type-list/list-header/list-header.component';
import { ProjectComponent } from './main-place/project/project.component';
import { LabelComponent } from './main-place/label/label.component';
import { FilterComponent } from './main-place/filter/filter.component';
import { TableTaskComponent } from './_type-table/table-task/table-task.component';
import { TableAddTaskComponent } from './_type-table/table-add-task/table-add-task.component';
import { TableAddSectionComponent } from './_type-table/table-add-section/table-add-section.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SvgWorkspacePlaceModule,
        SvgHeaderModule,
        SvgLeftMenuModule,
        SvgDropdownsModule,
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
        TableHeaderComponent,
        TableColumnComponent,
        TableColumnHeaderComponent,
        //
        TodayComponent,
        InboxComponent,
        ListHeaderComponent,
        ProjectComponent,
        LabelComponent,
        FilterComponent,
        TableTaskComponent,
        TableAddTaskComponent,
        TableAddSectionComponent
    ],
    exports: [WorkspaceComponent]
})
export class WorkspaceModule {}

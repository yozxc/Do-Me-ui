import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './_type-list/list-task/list-task.component';
import { ListSectionComponent } from './_type-list/list-section/list-section.component';
import { ListAddSectionComponent } from './_type-list/list-add-section/list-add-section.component';
import { TableColumnComponent } from './_type-table/table-column/table-column.component';
import { TableColumnHeaderComponent } from './_type-table/table-column-header/table-column-header.component';

import { TodayComponent } from './views/today/today.component';
import { InboxComponent } from './views/inbox/inbox.component';
import { ViewHeaderComponent } from './view-header/view-header.component';
import { ProjectComponent } from './views/project/project.component';
import { LabelComponent } from './views/label/label.component';
import { FilterComponent } from './views/filter/filter.component';
import { TableTaskComponent } from './_type-table/table-task/table-task.component';
import { TableAddSectionComponent } from './_type-table/table-add-section/table-add-section.component';
import { AddTaskLabelComponent } from './add-task-label/add-task-label.component';

import { LeftMenuQuery } from './left-menu/left-menu.state/left-menu.query';
import { LeftMenuService } from './left-menu/left-menu.state/left-menu.service';
import { LeftMenuStore } from './left-menu/left-menu.state/left-menu.store';
import { InboxStore } from './views/inbox/inbox.state/inbox.store';
import { InboxService } from './views/inbox/inbox.state/inbox.service';
import { InboxQuery } from './views/inbox/inbox.state/inbox.query';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SvgWorkspacePlaceModule,
        SvgHeaderModule,
        SvgLeftMenuModule,
        SvgDropdownsModule,
        UiComponentsModule,
        ModalsModule
    ],
    providers: [
        // state ↓
        LeftMenuStore,
        LeftMenuService,
        LeftMenuQuery,
        InboxStore,
        InboxService,
        InboxQuery
    ],
    declarations: [
        HeaderComponent,
        WorkspaceComponent,
        SearchComponent,
        LeftMenuComponent,
        ListTaskComponent,
        ListSectionComponent,
        ListAddSectionComponent,
        TableColumnComponent,
        TableColumnHeaderComponent,
        //
        TodayComponent,
        InboxComponent,
        ViewHeaderComponent,
        ProjectComponent,
        LabelComponent,
        FilterComponent,
        TableTaskComponent,
        TableAddSectionComponent,
        AddTaskComponent,
        AddTaskLabelComponent
    ],
    exports: [WorkspaceComponent]
})
export class WorkspaceModule {}

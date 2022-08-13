import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SvgDropdownsModule } from '@app//shared/svg-store/dropdowns/svg-dropdowns.module';
import { SvgHeaderModule } from '@app/shared/svg-store/header/svg-header.module';
import { SvgLeftMenuModule } from '@app/shared/svg-store/left-menu/svg-left-menu.module';
import { SvgWorkspacePlaceModule } from '@app/shared/svg-store/workspace-place/svg-workspace-place.module';
import { UiComponentsModule } from '@shared/ui-components/ui-components.module';
import { ModalsModule } from '../modals/modals.module';

import { AddTaskComponent } from './add-task/add-task.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { SearchComponent } from './search/search.component';
import { WorkspaceComponent } from './workspace.component';
import { BoardColumnHeaderComponent } from './_type-board/board-column-header/board-column-header.component';
import { BoardColumnComponent } from './_type-board/board-column/board-column.component';
import { ListAddSectionComponent } from './_type-list/list-add-section/list-add-section.component';
import { ListSectionComponent } from './_type-list/list-section/list-section.component';
import { ListTaskComponent } from './_type-list/list-task/list-task.component';

import { ViewHeaderComponent } from './view-header/view-header.component';
import { FilterComponent } from './views/filter/filter.component';
import { InboxComponent } from './views/inbox/inbox.component';
import { LabelComponent } from './views/label/label.component';
import { ProjectComponent } from './views/project/project.component';
import { TodayComponent } from './views/today/today.component';
import { BoardAddSectionComponent } from './_type-board/board-add-section/board-add-section.component';
import { BoardTaskComponent } from './_type-board/board-task/board-task.component';

import { LeftMenuQuery } from './left-menu/left-menu.state/left-menu.query';
import { LeftMenuService } from './left-menu/left-menu.state/left-menu.service';
import { LeftMenuStore } from './left-menu/left-menu.state/left-menu.store';
import { InboxQuery } from './views/inbox/inbox.state/inbox.query';
import { InboxService } from './views/inbox/inbox.state/inbox.service';
import { InboxStore } from './views/inbox/inbox.state/inbox.store';

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
        BoardColumnComponent,
        BoardColumnHeaderComponent,
        //
        TodayComponent,
        InboxComponent,
        ViewHeaderComponent,
        ProjectComponent,
        LabelComponent,
        FilterComponent,
        BoardTaskComponent,
        BoardAddSectionComponent,
        AddTaskComponent
    ],
    exports: [WorkspaceComponent]
})
export class WorkspaceModule {}

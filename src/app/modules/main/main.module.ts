import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgStoreModule } from '@shared/svg-store/svg-store.module';
import { UiComponentsModule } from '@shared/ui-components/ui-components.module';
import { ModalsModule } from '../modals/modals.module';

import { HeaderComponent } from './components/header/header.component';
import { TodoMainComponent } from './components/todo-main.component';
import { SearchComponent } from './components/search/search.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MainPlaceComponent } from './components/main-place/main-place.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { ListAddTaskComponent } from './components/list-add-task/list-add-task.component';
import { MainPlaceSubListComponent } from './components/main-place-sub-list/main-place-sub-list.component';

import { LmStateService } from './components/left-menu/lm-state.service';

@NgModule({
    imports: [CommonModule, SvgStoreModule, UiComponentsModule, ModalsModule, RouterModule],
    providers: [LmStateService],
    declarations: [
        HeaderComponent,
        TodoMainComponent,
        SearchComponent,
        LeftMenuComponent,
        MainPlaceComponent,
        ListTaskComponent,
        ListAddTaskComponent,
        MainPlaceSubListComponent,
    ],
    exports: [TodoMainComponent],
})
export class MainModule {}

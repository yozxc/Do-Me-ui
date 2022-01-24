import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgStoreModule } from '@shared/modules/svg-store/svg-store.module';
import { UiComponentsModule } from '@shared/modules/ui-components/ui-components.module';

import { HeaderComponent } from './components/header/header.component';
import { TodoMainComponent } from './components/todo-main.component';
import { SearchComponent } from './components/search/search.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MainPlaceComponent } from './components/main-place/main-place.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { ListAddTaskComponent } from './components/list-add-task/list-add-task.component';
import { MainPlaceSubListComponent } from './components/main-place-sub-list/main-place-sub-list.component';

@NgModule({
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
    imports: [CommonModule, SvgStoreModule, UiComponentsModule],
})
export class MainModule {}

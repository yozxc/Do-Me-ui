import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalsRoutingModule } from './modals-routing.module';
import { UiComponentsModule } from '@shared/ui-components/ui-components.module';

import { AddProjectComponent } from './add-project/add-project.component';
import { ModalsManagerComponent } from './modals-manager.component';
import { AddFilterComponent } from './add-filter/add-filter.component';
import { AddLabelComponent } from './add-label/add-label.component';

import { ModalsControlerService } from './modals-controler.service';

@NgModule({
    imports: [CommonModule, UiComponentsModule, ModalsRoutingModule],
    declarations: [ModalsManagerComponent, AddProjectComponent, AddFilterComponent, AddLabelComponent],
    providers: [ModalsControlerService],
    exports: [ModalsManagerComponent],
})
export class ModalsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgStoreModule } from '@shared/svg-store/svg-store.module';
import { UiComponentsModule } from '@shared/ui-components/ui-components.module';

import { AddProjectComponent } from './add-project/add-project.component';
import { ModalsManagerComponent } from './modals-manager.component';
import { AddFilterComponent } from './add-filter/add-filter.component';
import { AddLabelComponent } from './add-label/add-label.component';
import { ModalsControlerService } from './modals-controler.service';
import { SettingsComponent } from './settings/settings.component';
import { AccountSettingsComponent } from './settings/route-components/account-settings/account-settings.component';
import { GeneralSettingsComponent } from './settings/route-components/general-settings/general-settings.component';
import { AdvancedSettingsComponent } from './settings/route-components/advanced-settings/advanced-settings.component';
import { ThemeSettingsComponent } from './settings/route-components/theme-settings/theme-settings.component';

@NgModule({
    imports: [CommonModule, UiComponentsModule, SvgStoreModule],
    declarations: [
        ModalsManagerComponent,
        AddProjectComponent,
        AddFilterComponent,
        AddLabelComponent,
        SettingsComponent,
        AccountSettingsComponent,
        GeneralSettingsComponent,
        AdvancedSettingsComponent,
        ThemeSettingsComponent,
    ],
    providers: [ModalsControlerService],
    exports: [ModalsManagerComponent],
})
export class ModalsModule {}

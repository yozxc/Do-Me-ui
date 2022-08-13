import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SvgModalsModule } from '@app/shared/svg-store/modals/svg-modals.module';
import { SvgSettingsThemeModule } from '@app/shared/svg-store/settings-theme/svg-settings-theme.module';
import { UiComponentsModule } from '@shared/ui-components/ui-components.module';

import { SvgWorkspacePlaceModule } from '@app/shared/svg-store/workspace-place/svg-workspace-place.module';
import { SvgAuthModule } from '@shared/svg-store/auth/svg-auth.module';
import { AddFilterComponent } from './add-filter/add-filter.component';
import { AddLabelComponent } from './add-label/add-label.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ModalsManagerComponent } from './modals-manager.component';

import { QuickAddComponent } from './quick-add/quick-add.component';
import { RemovePhotoComponent } from './remove-photo/remove-photo.component';
import { AccountSettingsComponent } from './settings/route-components/account-settings/account-settings.component';
import { AdvancedSettingsComponent } from './settings/route-components/advanced-settings/advanced-settings.component';
import { ChangeEmailComponent } from './settings/route-components/change-email/change-email.component';
import { ChangePasswordComponent } from './settings/route-components/change-password/change-password.component';
import { DeleteAccountComponent } from './settings/route-components/delete-account/delete-account.component';
import { GeneralSettingsComponent } from './settings/route-components/general-settings/general-settings.component';
import { ThemeSettingsComponent } from './settings/route-components/theme-settings/theme-settings.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SvgModalsModule,
        SvgSettingsThemeModule,
        SvgWorkspacePlaceModule,
        SvgAuthModule,
        UiComponentsModule
    ],
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
        RemovePhotoComponent,
        ChangeEmailComponent,
        ChangePasswordComponent,
        DeleteAccountComponent,
        QuickAddComponent
    ],
    exports: [ModalsManagerComponent]
})
export class ModalsModule {}

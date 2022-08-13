import { Routes } from '@angular/router';

import { MODALS_ROUTE, OUTLETS, SETTINGS_ROUTE } from '@app/core/router/nav-constants';

import { AddFilterComponent } from '@modules/modals/add-filter/add-filter.component';
import { AddLabelComponent } from '@modules/modals/add-label/add-label.component';
import { AddProjectComponent } from '@modules/modals/add-project/add-project.component';
import { QuickAddComponent } from '@modules/modals/quick-add/quick-add.component';
import { SettingsComponent } from '@modules/modals/settings/settings.component';

import { AccountSettingsComponent } from '@modules/modals/settings/route-components/account-settings/account-settings.component';
import { AdvancedSettingsComponent } from '@modules/modals/settings/route-components/advanced-settings/advanced-settings.component';
import { ChangeEmailComponent } from '@modules/modals/settings/route-components/change-email/change-email.component';
import { ChangePasswordComponent } from '@modules/modals/settings/route-components/change-password/change-password.component';
import { DeleteAccountComponent } from '@modules/modals/settings/route-components/delete-account/delete-account.component';
import { GeneralSettingsComponent } from '@modules/modals/settings/route-components/general-settings/general-settings.component';
import { ThemeSettingsComponent } from '@modules/modals/settings/route-components/theme-settings/theme-settings.component';

const settingsRoutes: Routes = [
    { path: ``, component: AccountSettingsComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.ACCOUNT}`, component: AccountSettingsComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.GENERAL}`, component: GeneralSettingsComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.ADVANCED}`, component: AdvancedSettingsComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.THEME}`, component: ThemeSettingsComponent, outlet: OUTLETS.SETTINGS_SPACE },

    { path: `${SETTINGS_ROUTE.CHANGE_EMAIL}`, component: ChangeEmailComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.CHANGE_PASSWORD}`, component: ChangePasswordComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.DELETE_ACCOUNT}`, component: DeleteAccountComponent, outlet: OUTLETS.SETTINGS_SPACE }
];

export const modalsRoutes: Routes = [
    { path: `${MODALS_ROUTE.ADD_PROJECT}`, component: AddProjectComponent, outlet: OUTLETS.MODALS },
    { path: `${MODALS_ROUTE.ADD_LABEL}`, component: AddLabelComponent, outlet: OUTLETS.MODALS },
    { path: `${MODALS_ROUTE.ADD_FILTER}`, component: AddFilterComponent, outlet: OUTLETS.MODALS },
    { path: `${MODALS_ROUTE.QUICK_ADD}`, component: QuickAddComponent, outlet: OUTLETS.MODALS },
    {
        path: `${MODALS_ROUTE.SETTINGS}`,
        component: SettingsComponent,
        outlet: OUTLETS.MODALS,
        children: [...settingsRoutes]
    }
];

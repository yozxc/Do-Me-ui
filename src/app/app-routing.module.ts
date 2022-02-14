import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PAGES_ROUTE, MODALS_ROUTE, SETTINGS_ROUTE, OUTLETS } from './core/nav-constants';

import { WorkspaceComponent } from './modules/workspace/components/workspace.component';
import { SignPageComponent } from './modules/auth/components/sign-page/sign-page.component';
import { RegisterPageComponent } from './modules/auth/components/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './modules/auth/components/forgot-pass-page/forgot-password-page.component';
import { ResetPassPageComponent } from './modules/auth/components/reset-pass-page/reset-pass-page.component';

import { AddProjectComponent } from './modules/modals/add-project/add-project.component';
import { AddLabelComponent } from './modules/modals/add-label/add-label.component';
import { AddFilterComponent } from './modules/modals/add-filter/add-filter.component';
import { SettingsComponent } from './modules/modals/settings/settings.component';
import { QuickAddComponent } from './modules/modals/quick-add/quick-add.component';

import { AccountSettingsComponent } from './modules/modals/settings/route-components/account-settings/account-settings.component';
import { GeneralSettingsComponent } from './modules/modals/settings/route-components/general-settings/general-settings.component';
import { AdvancedSettingsComponent } from './modules/modals/settings/route-components/advanced-settings/advanced-settings.component';
import { ThemeSettingsComponent } from './modules/modals/settings/route-components/theme-settings/theme-settings.component';
import { ChangeEmailComponent } from './modules/modals/settings/route-components/change-email/change-email.component';
import { ChangePasswordComponent } from './modules/modals/settings/route-components/change-password/change-password.component';
import { DeleteAccountComponent } from './modules/modals/settings/route-components/delete-account/delete-account.component';

const settingsRoutes: Routes = [
    { path: ``, component: AccountSettingsComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.ACCOUNT}`, component: AccountSettingsComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.GENERAL}`, component: GeneralSettingsComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.ADVANCED}`, component: AdvancedSettingsComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.THEME}`, component: ThemeSettingsComponent, outlet: OUTLETS.SETTINGS_SPACE },

    { path: `${SETTINGS_ROUTE.CHANGE_EMAIL}`, component: ChangeEmailComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.CHANGE_PASSWORD}`, component: ChangePasswordComponent, outlet: OUTLETS.SETTINGS_SPACE },
    { path: `${SETTINGS_ROUTE.DELETE_ACCOUNT}`, component: DeleteAccountComponent, outlet: OUTLETS.SETTINGS_SPACE },
];

const outletRoutes: Routes = [
    { path: `${MODALS_ROUTE.ADD_PROJECT}`, component: AddProjectComponent, outlet: OUTLETS.MODALS },
    { path: `${MODALS_ROUTE.ADD_LABEL}`, component: AddLabelComponent, outlet: OUTLETS.MODALS },
    { path: `${MODALS_ROUTE.ADD_FILTER}`, component: AddFilterComponent, outlet: OUTLETS.MODALS },
    {
        path: `${MODALS_ROUTE.SETTINGS}`,
        component: SettingsComponent,
        outlet: OUTLETS.MODALS,
        children: [...settingsRoutes],
    },
    { path: `${MODALS_ROUTE.QUICK_ADD}`, component: QuickAddComponent, outlet: OUTLETS.MODALS },
];

const routes: Routes = [
    { path: `${PAGES_ROUTE.WORKSPACE}`, component: WorkspaceComponent, children: [...outletRoutes] },

    { path: ``, redirectTo: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.SIGNIN}`, pathMatch: 'full' },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.SIGNIN}`, component: SignPageComponent },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.REGISTER}`, component: RegisterPageComponent },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.FORGOT_PASSWORD}`, component: ForgotPasswordPageComponent },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.RESET_PASSWORD}`, component: ResetPassPageComponent },

    // todo : dev temp
    { path: `**`, redirectTo: `${PAGES_ROUTE.WORKSPACE}`, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

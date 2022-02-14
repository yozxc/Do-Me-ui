import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTE, MODALS_ROUTE, SETTINGS_ROUTE } from './core/nav-constants';

import { WorkspaceComponent } from './modules/workspace/components/workspace.component';
import { SignPageComponent } from './modules/auth/components/sign-page/sign-page.component';
import { RegisterPageComponent } from './modules/auth/components/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './modules/auth/components/forgot-pass-page/forgot-password-page.component';
import { ResetPassPageComponent } from './modules/auth/components/reset-pass-page/reset-pass-page.component';

import { AddProjectComponent } from './modules/modals/add-project/add-project.component';
import { AddLabelComponent } from './modules/modals/add-label/add-label.component';
import { AddFilterComponent } from './modules/modals/add-filter/add-filter.component';
import { SettingsComponent } from './modules/modals/settings/settings.component';

import { AccountSettingsComponent } from './modules/modals/settings/route-components/account-settings/account-settings.component';
import { GeneralSettingsComponent } from './modules/modals/settings/route-components/general-settings/general-settings.component';
import { AdvancedSettingsComponent } from './modules/modals/settings/route-components/advanced-settings/advanced-settings.component';
import { ThemeSettingsComponent } from './modules/modals/settings/route-components/theme-settings/theme-settings.component';
import { ChangeEmailComponent } from './modules/modals/settings/route-components/change-email/change-email.component';
import { ChangePasswordComponent } from './modules/modals/settings/route-components/change-password/change-password.component';
import { DeleteAccountComponent } from './modules/modals/settings/route-components/delete-account/delete-account.component';

const settingsRoutes: Routes = [
    { path: ``, component: AccountSettingsComponent, outlet: 'settingsSpace' },
    { path: `${SETTINGS_ROUTE.ACCOUNT}`, component: AccountSettingsComponent, outlet: 'settingsSpace' },
    { path: `${SETTINGS_ROUTE.GENERAL}`, component: GeneralSettingsComponent, outlet: 'settingsSpace' },
    { path: `${SETTINGS_ROUTE.ADVANCED}`, component: AdvancedSettingsComponent, outlet: 'settingsSpace' },
    { path: `${SETTINGS_ROUTE.THEME}`, component: ThemeSettingsComponent, outlet: 'settingsSpace' },

    { path: `${SETTINGS_ROUTE.CHANGE_EMAIL}`, component: ChangeEmailComponent, outlet: 'settingsSpace' },
    { path: `${SETTINGS_ROUTE.CHANGE_PASSWORD}`, component: ChangePasswordComponent, outlet: 'settingsSpace' },
    { path: `${SETTINGS_ROUTE.DELETE_ACCOUNT}`, component: DeleteAccountComponent, outlet: 'settingsSpace' },
];

const outletRoutes: Routes = [
    { path: `${MODALS_ROUTE.ADD_PROJECT}`, component: AddProjectComponent, outlet: 'modals' },
    { path: `${MODALS_ROUTE.ADD_LABEL}`, component: AddLabelComponent, outlet: 'modals' },
    { path: `${MODALS_ROUTE.ADD_FILTER}`, component: AddFilterComponent, outlet: 'modals' },
    { path: `${MODALS_ROUTE.SETTINGS}`, component: SettingsComponent, outlet: 'modals', children: [...settingsRoutes] },
];

const routes: Routes = [
    { path: `${ROUTE.WORKSPACE}`, component: WorkspaceComponent, children: [...outletRoutes] },

    { path: ``, redirectTo: `${ROUTE.AUTH}/${ROUTE.SIGNIN}`, pathMatch: 'full' },
    { path: `${ROUTE.AUTH}/${ROUTE.SIGNIN}`, component: SignPageComponent },
    { path: `${ROUTE.AUTH}/${ROUTE.REGISTER}`, component: RegisterPageComponent },
    { path: `${ROUTE.AUTH}/${ROUTE.FORGOT_PASSWORD}`, component: ForgotPasswordPageComponent },
    { path: `${ROUTE.AUTH}/${ROUTE.RESET_PASSWORD}`, component: ResetPassPageComponent },

    // todo : dev temp
    { path: `**`, redirectTo: `${ROUTE.WORKSPACE}`, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

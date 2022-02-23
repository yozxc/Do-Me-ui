import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PAGES_ROUTE, MODALS_ROUTE, SETTINGS_ROUTE, MAIN_PLACE_ROUTE, OUTLETS } from './core/nav-constants';

import { WorkspaceComponent } from './modules/workspace/workspace.component';
import { SignPageComponent } from './modules/auth/sign-page/sign-page.component';
import { RegisterPageComponent } from './modules/auth/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './modules/auth/forgot-pass-page/forgot-password-page.component';
import { ResetPassPageComponent } from './modules/auth/reset-pass-page/reset-pass-page.component';

import { AddProjectComponent } from './modules/modals/add-project/add-project.component';
import { AddLabelComponent } from './modules/modals/add-label/add-label.component';
import { AddFilterComponent } from './modules/modals/add-filter/add-filter.component';
import { QuickAddComponent } from './modules/modals/quick-add/quick-add.component';
import { SettingsComponent } from './modules/modals/settings/settings.component';

import { AccountSettingsComponent } from './modules/modals/settings/route-components/account-settings/account-settings.component';
import { GeneralSettingsComponent } from './modules/modals/settings/route-components/general-settings/general-settings.component';
import { AdvancedSettingsComponent } from './modules/modals/settings/route-components/advanced-settings/advanced-settings.component';
import { ThemeSettingsComponent } from './modules/modals/settings/route-components/theme-settings/theme-settings.component';
import { ChangeEmailComponent } from './modules/modals/settings/route-components/change-email/change-email.component';
import { ChangePasswordComponent } from './modules/modals/settings/route-components/change-password/change-password.component';
import { DeleteAccountComponent } from './modules/modals/settings/route-components/delete-account/delete-account.component';

import { InboxComponent } from './modules/workspace/main-place/inbox/inbox.component';
import { TodayComponent } from './modules/workspace/main-place/today/today.component';
import { ProjectComponent } from './modules/workspace/main-place/project/project.component';
import { LabelComponent } from './modules/workspace/main-place/label/label.component';
import { FilterComponent } from './modules/workspace/main-place/filter/filter.component';

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

const modalsRoutes: Routes = [
    { path: `${MODALS_ROUTE.ADD_PROJECT}`, component: AddProjectComponent, outlet: OUTLETS.MODALS },
    { path: `${MODALS_ROUTE.ADD_LABEL}`, component: AddLabelComponent, outlet: OUTLETS.MODALS },
    { path: `${MODALS_ROUTE.ADD_FILTER}`, component: AddFilterComponent, outlet: OUTLETS.MODALS },
    { path: `${MODALS_ROUTE.QUICK_ADD}`, component: QuickAddComponent, outlet: OUTLETS.MODALS },
    {
        path: `${MODALS_ROUTE.SETTINGS}`,
        component: SettingsComponent,
        outlet: OUTLETS.MODALS,
        children: [...settingsRoutes],
    },
];

const mainPlaceRoutes: Routes = [
    { path: ``, redirectTo: `${MAIN_PLACE_ROUTE.TODAY}`, pathMatch: 'full' },
    { path: `${MAIN_PLACE_ROUTE.TODAY}`, component: TodayComponent },
    { path: `${MAIN_PLACE_ROUTE.INBOX}`, component: InboxComponent },
    { path: `${MAIN_PLACE_ROUTE.PROJECT}/:${MAIN_PLACE_ROUTE.ID}`, component: ProjectComponent },
    { path: `${MAIN_PLACE_ROUTE.LABEL}/:${MAIN_PLACE_ROUTE.ID}`, component: LabelComponent },
    { path: `${MAIN_PLACE_ROUTE.FILTER}/:${MAIN_PLACE_ROUTE.ID}`, component: FilterComponent },
];

const pagesRoutes: Routes = [
    {
        path: `${PAGES_ROUTE.WORKSPACE}`,
        component: WorkspaceComponent,
        children: [...modalsRoutes, ...mainPlaceRoutes],
    },

    { path: ``, redirectTo: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.SIGNIN}`, pathMatch: 'full' },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.SIGNIN}`, component: SignPageComponent },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.REGISTER}`, component: RegisterPageComponent },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.FORGOT_PASSWORD}`, component: ForgotPasswordPageComponent },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.RESET_PASSWORD}`, component: ResetPassPageComponent },

    // todo : dev temp
    { path: `**`, redirectTo: `${PAGES_ROUTE.WORKSPACE}`, pathMatch: 'full' },
];

@NgModule({
    // todo : fix routes (.forChild(Routes)...)
    imports: [RouterModule.forRoot(pagesRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

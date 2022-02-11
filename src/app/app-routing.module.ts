import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkspaceComponent } from './modules/workspace/components/workspace.component';
import { SignPageComponent } from './modules/auth/components/sign-page/sign-page.component';
import { RegisterPageComponent } from './modules/auth/components/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './modules/auth/components/forgot-pass-page/forgot-password-page.component';
import { ResetPassPageComponent } from './modules/auth/components/reset-pass-page/reset-pass-page.component';

enum ROUTE {
    AUTH = 'auth',
    SIGNIN = 'signIn',
    REGISTER = 'register',
    FORGOTPASSWORD = 'forgotPassword',
    RESETPASSWORD = 'resetPassword',

    WORKSPACE = 'workspace',
}

const routes: Routes = [
    { path: `${ROUTE.WORKSPACE}`, component: WorkspaceComponent },

    { path: ``, redirectTo: `${ROUTE.AUTH}/${ROUTE.SIGNIN}`, pathMatch: 'full' },
    { path: `${ROUTE.AUTH}/${ROUTE.SIGNIN}`, component: SignPageComponent },
    { path: `${ROUTE.AUTH}/${ROUTE.REGISTER}`, component: RegisterPageComponent },
    { path: `${ROUTE.AUTH}/${ROUTE.FORGOTPASSWORD}`, component: ForgotPasswordPageComponent },
    { path: `${ROUTE.AUTH}/${ROUTE.RESETPASSWORD}`, component: ResetPassPageComponent },

    // todo : dev temp
    { path: `**`, redirectTo: `${ROUTE.WORKSPACE}`, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

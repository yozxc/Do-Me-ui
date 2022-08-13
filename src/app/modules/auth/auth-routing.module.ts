import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PAGES_ROUTE } from '@app/core/router/nav-constants';

import { ForgotPasswordPageComponent } from '@modules/auth/forgot-pass-page/forgot-password-page.component';
import { RegisterPageComponent } from '@modules/auth/register-page/register-page.component';
import { ResetPassPageComponent } from '@modules/auth/reset-pass-page/reset-pass-page.component';
import { SignPageComponent } from '@modules/auth/sign-page/sign-page.component';

const pagesRoutes: Routes = [
    { path: ``, redirectTo: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.SIGNIN}`, pathMatch: 'full' },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.SIGNIN}`, component: SignPageComponent },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.REGISTER}`, component: RegisterPageComponent },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.FORGOT_PASSWORD}`, component: ForgotPasswordPageComponent },
    { path: `${PAGES_ROUTE.AUTH}/${PAGES_ROUTE.RESET_PASSWORD}`, component: ResetPassPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}

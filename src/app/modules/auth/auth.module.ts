import { SvgStoreModule } from './../../shared/svg-store/svg-store.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SignPageComponent } from './components/sign-page/sign-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './components/forgot-pass-page/forgot-password-page.component';
import { ResetPassPageComponent } from './components/reset-pass-page/reset-pass-page.component';

@NgModule({
    declarations: [SignPageComponent, RegisterPageComponent, ForgotPasswordPageComponent, ResetPassPageComponent],
    imports: [CommonModule, RouterModule, SvgStoreModule],
    exports: [SignPageComponent, RegisterPageComponent, ForgotPasswordPageComponent, ResetPassPageComponent],
})
export class AuthModule {}

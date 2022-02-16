import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SvgAuthModule } from '@app/shared/svg-store/auth/svg-auth.module';

import { SignPageComponent } from './sign-page/sign-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordPageComponent } from './forgot-pass-page/forgot-password-page.component';
import { ResetPassPageComponent } from './reset-pass-page/reset-pass-page.component';

@NgModule({
    imports: [CommonModule, RouterModule, SvgAuthModule],
    declarations: [SignPageComponent, RegisterPageComponent, ForgotPasswordPageComponent, ResetPassPageComponent],
    exports: [SignPageComponent, RegisterPageComponent, ForgotPasswordPageComponent, ResetPassPageComponent],
})
export class AuthModule {}

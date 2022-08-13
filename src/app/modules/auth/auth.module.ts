import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiComponentsModule } from '@shared/ui-components/ui-components.module';
import { AuthRoutingModule } from './auth-routing.module';

import { SvgAuthModule } from '@app/shared/svg-store/auth/svg-auth.module';

import { ForgotPasswordPageComponent } from './forgot-pass-page/forgot-password-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ResetPassPageComponent } from './reset-pass-page/reset-pass-page.component';
import { SignPageComponent } from './sign-page/sign-page.component';

@NgModule({
    imports: [CommonModule, AuthRoutingModule, SvgAuthModule, UiComponentsModule],
    declarations: [SignPageComponent, RegisterPageComponent, ForgotPasswordPageComponent, ResetPassPageComponent],
    exports: []
})
export class AuthModule {}

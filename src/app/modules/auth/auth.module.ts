import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SignPageComponent } from './components/sign-page/sign-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

import { FacebookIconComponent } from './components/svg/facebook-icon.component';
import { GoogleIconComponent } from './components/svg/google-icon.component';
import { CloseEyeComponent } from './components/svg/close-eye.component';
import { OpenEyeComponent } from './components/svg/open-eye.component';

@NgModule({
    declarations: [
        SignPageComponent,
        RegisterPageComponent,
        //
        FacebookIconComponent,
        GoogleIconComponent,
        CloseEyeComponent,
        OpenEyeComponent,
    ],
    exports: [SignPageComponent, RegisterPageComponent],
    imports: [CommonModule, RouterModule],
})
export class AuthModule {}

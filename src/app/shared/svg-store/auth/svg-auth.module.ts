import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloseEyeComponent } from './close-eye.component';
import { FacebookIconComponent } from './facebook-icon.component';
import { GoogleIconComponent } from './google-icon.component';
import { OpenEyeComponent } from './open-eye.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CloseEyeComponent, FacebookIconComponent, GoogleIconComponent, OpenEyeComponent],
    exports: [CloseEyeComponent, FacebookIconComponent, GoogleIconComponent, OpenEyeComponent]
})
export class SvgAuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './components/auth-page/auth-page.component';

@NgModule({
    declarations: [AuthPageComponent],
    exports: [AuthPageComponent],
    imports: [CommonModule],
})
export class AuthModule {}

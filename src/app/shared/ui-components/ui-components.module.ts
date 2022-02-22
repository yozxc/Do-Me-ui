import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDropdownsModule } from './../svg-store/dropdowns/svg-dropdowns.module';

import { ButtonComponent } from './button/button.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';

@NgModule({
    imports: [CommonModule, SvgDropdownsModule],
    declarations: [ButtonComponent, MenuDropdownComponent],
    exports: [ButtonComponent, MenuDropdownComponent],
})
export class UiComponentsModule {}

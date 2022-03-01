import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDropdownsModule } from './../svg-store/dropdowns/svg-dropdowns.module';

import { ButtonComponent } from './button/button.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';
import { ViewMenuDropdownComponent } from './view-menu-dropdown/view-menu-dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
    imports: [CommonModule, SvgDropdownsModule],
    declarations: [ButtonComponent, MenuDropdownComponent, ViewMenuDropdownComponent, CheckboxComponent],
    exports: [ButtonComponent, MenuDropdownComponent, ViewMenuDropdownComponent, CheckboxComponent]
})
export class UiComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDropdownsModule } from './../svg-store/dropdowns/svg-dropdowns.module';

import { ButtonComponent } from './button/button.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';
import { ViewMenuDropdownComponent } from './view-menu-dropdown/view-menu-dropdown.component';

@NgModule({
    imports: [CommonModule, SvgDropdownsModule],
    declarations: [ButtonComponent, MenuDropdownComponent, ViewMenuDropdownComponent],
    exports: [ButtonComponent, MenuDropdownComponent, ViewMenuDropdownComponent]
})
export class UiComponentsModule {}

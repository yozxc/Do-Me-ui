import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDropdownsModule } from './../svg-store/dropdowns/svg-dropdowns.module';
import { SvgLeftMenuModule } from '../svg-store/left-menu/svg-left-menu.module';

import { ButtonComponent } from './button/button.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';
import { ViewMenuDropdownComponent } from './view-menu-dropdown/view-menu-dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PriorityDropdownComponent } from './priority-dropdown/priority-dropdown.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { LabelDropdownComponent } from './label-dropdown/label-dropdown.component';

@NgModule({
    imports: [CommonModule, SvgDropdownsModule, SvgLeftMenuModule],
    declarations: [
        ButtonComponent,
        MenuDropdownComponent,
        ViewMenuDropdownComponent,
        CheckboxComponent,
        PriorityDropdownComponent,
        ColorPickerComponent,
        LabelDropdownComponent
    ],
    exports: [
        ButtonComponent,
        MenuDropdownComponent,
        ViewMenuDropdownComponent,
        CheckboxComponent,
        PriorityDropdownComponent,
        ColorPickerComponent,
        LabelDropdownComponent
    ]
})
export class UiComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDropdownsModule } from './../svg-store/dropdowns/svg-dropdowns.module';
import { SvgLeftMenuModule } from '../svg-store/left-menu/svg-left-menu.module';
import { SvgWorkspacePlaceModule } from '../svg-store/workspace-place/svg-workspace-place.module';

import { ButtonComponent } from './button/button.component';
import { MenuDropdownComponent } from './menu-dropdown/menu-dropdown.component';
import { ViewMenuDropdownComponent } from './view-menu-dropdown/view-menu-dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { PriorityDropdownComponent } from './priority-dropdown/priority-dropdown.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { LabelDropdownComponent } from './label-dropdown/label-dropdown.component';
import { ProjectSelectDropdownComponent } from './project-select-dropdown/project-select-dropdown.component';

@NgModule({
    imports: [CommonModule, SvgDropdownsModule, SvgLeftMenuModule, SvgWorkspacePlaceModule],
    declarations: [
        ButtonComponent,
        MenuDropdownComponent,
        ViewMenuDropdownComponent,
        CheckboxComponent,
        PriorityDropdownComponent,
        ColorPickerComponent,
        LabelDropdownComponent,
        ProjectSelectDropdownComponent
    ],
    exports: [
        ButtonComponent,
        MenuDropdownComponent,
        ViewMenuDropdownComponent,
        CheckboxComponent,
        PriorityDropdownComponent,
        ColorPickerComponent,
        LabelDropdownComponent,
        ProjectSelectDropdownComponent
    ]
})
export class UiComponentsModule {}

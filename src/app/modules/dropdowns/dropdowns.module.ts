import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgDropdownsModule } from '@shared/svg-store/dropdowns/svg-dropdowns.module';

import { LeftMenuDropdownComponent } from './left-menu-dropdown/left-menu-dropdown.component';

@NgModule({
    imports: [CommonModule, SvgDropdownsModule],
    declarations: [LeftMenuDropdownComponent],
    exports: [LeftMenuDropdownComponent],
})
export class DropdownsModule {}

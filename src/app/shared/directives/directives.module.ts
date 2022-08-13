import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownPositionDirective } from './dropdown-position/dropdown-position.directive';

@NgModule({
    declarations: [DropdownPositionDirective],
    imports: [CommonModule],
    exports: [DropdownPositionDirective]
})
export class DirectivesModule {}

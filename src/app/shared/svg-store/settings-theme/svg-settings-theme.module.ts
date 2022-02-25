import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StDarkComponent } from './st-dark.component';
import { StDefaultComponent } from './st-default.component';
import { StNeutralComponent } from './st-neutral.component';
import { StNoirComponent } from './st-noir.component';
import { StTangerineComponent } from './st-tangerine.component';

@NgModule({
    imports: [CommonModule],
    declarations: [StDefaultComponent, StNoirComponent, StDarkComponent, StNeutralComponent, StTangerineComponent],
    exports: [StDefaultComponent, StNoirComponent, StDarkComponent, StNeutralComponent, StTangerineComponent]
})
export class SvgSettingsThemeModule {}

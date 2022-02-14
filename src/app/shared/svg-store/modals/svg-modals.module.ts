import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoCloseComponent } from './mo-close.component';
import { MoLmAccountComponent } from './mo-lm-account.component';
import { MoLmAdvancedComponent } from './mo-lm-advanced.component';
import { MoLmBackupsComponent } from './mo-lm-backups.component';
import { MoLmGeneralComponent } from './mo-lm-general.component';
import { MoLmNotificationsComponent } from './mo-lm-notifications.component';
import { MoLmProductivityComponent } from './mo-lm-productivity.component';
import { MoLmRemindersComponent } from './mo-lm-reminders.component';
import { MoLmThemeComponent } from './mo-lm-theme.component';
import { MoSettSelectComponent } from './mo-sett-select.component';
import { CloseEyeComponent } from './close-eye.component';
import { OpenEyeComponent } from './open-eye.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        MoCloseComponent,
        MoLmAccountComponent,
        MoLmGeneralComponent,
        MoLmAdvancedComponent,
        MoLmThemeComponent,
        MoLmProductivityComponent,
        MoLmRemindersComponent,
        MoLmNotificationsComponent,
        MoLmBackupsComponent,
        MoSettSelectComponent,
        CloseEyeComponent,
        OpenEyeComponent,
    ],
    exports: [
        MoCloseComponent,
        MoLmAccountComponent,
        MoLmGeneralComponent,
        MoLmAdvancedComponent,
        MoLmThemeComponent,
        MoLmProductivityComponent,
        MoLmRemindersComponent,
        MoLmNotificationsComponent,
        MoLmBackupsComponent,
        MoSettSelectComponent,
        CloseEyeComponent,
        OpenEyeComponent,
    ],
})
export class SvgModalsModule {}

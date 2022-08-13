import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderAddComponent } from './header-add.component';
import { HeaderBellComponent } from './header-bell.component';
import { HeaderHelpComponent } from './header-help.component';
import { HeaderHomeComponent } from './header-home.component';
import { HeaderMenuComponent } from './header-menu.component';
import { SearchCloseComponent } from './search-close.component';
import { SearchLoupeComponent } from './search-loupe.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        SearchLoupeComponent,
        SearchCloseComponent,
        HeaderMenuComponent,
        HeaderHomeComponent,
        HeaderAddComponent,
        HeaderHelpComponent,
        HeaderBellComponent
    ],
    exports: [
        SearchLoupeComponent,
        SearchCloseComponent,
        HeaderMenuComponent,
        HeaderHomeComponent,
        HeaderAddComponent,
        HeaderHelpComponent,
        HeaderBellComponent
    ]
})
export class SvgHeaderModule {}

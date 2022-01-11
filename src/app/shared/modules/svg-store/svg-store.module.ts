import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMenuComponent } from './components/header/header-menu.component';
import { HeaderHomeComponent } from './components/header/header-home.component';
import { SearchLoupeComponent } from './components/header/search-loupe.component';
import { SearchCloseComponent } from './components/header/search-close.component';
import { HeaderAddComponent } from './components/header/header-add.component';
import { HeaderHelpComponent } from './components/header/header-help.component';
import { HeaderBellComponent } from './components/header/header-bell.component';

@NgModule({
    declarations: [
        HeaderMenuComponent,
        HeaderHomeComponent,
        SearchLoupeComponent,
        SearchCloseComponent,
        HeaderAddComponent,
        HeaderHelpComponent,
        HeaderBellComponent,
    ],
    exports: [
        HeaderMenuComponent,
        HeaderHomeComponent,
        SearchLoupeComponent,
        SearchCloseComponent,
        HeaderAddComponent,
        HeaderHelpComponent,
        HeaderBellComponent,
    ],
    imports: [CommonModule],
})
export class SvgStoreModule {}

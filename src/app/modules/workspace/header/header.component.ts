import { LeftMenuService } from './../left-menu/left-menu.state/left-menu.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    constructor(private leftMenuService: LeftMenuService) {}

    headerMenuCLick() {
        this.leftMenuService.toggleColapsed();
    }
}

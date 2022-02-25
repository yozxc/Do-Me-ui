import { LmStateService } from './../left-menu/lm-state.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    constructor(public lmStateService: LmStateService) {}

    headerMenuCLick() {
        this.lmStateService.toggleIsClosed();
    }
}

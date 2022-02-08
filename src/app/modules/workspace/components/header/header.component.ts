import { LmStateService } from './../left-menu/lm-state.service';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ModalsControlerService } from '@app/modules/modals/modals-controler.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    constructor(public lmStateService: LmStateService, private modalsControlerService: ModalsControlerService) {}

    ngOnInit(): void {}

    headerMenuCLick() {
        this.lmStateService.toggleIsClosed();
    }

    onAvatarClick(e: MouseEvent) {
        e.stopPropagation();
        this.modalsControlerService.openSettings();
    }
}

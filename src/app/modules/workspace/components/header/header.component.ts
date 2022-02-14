import { LmStateService } from './../left-menu/lm-state.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    constructor(public lmStateService: LmStateService) {}

    ngOnInit(): void {}

    headerMenuCLick() {
        this.lmStateService.toggleIsClosed();
    }
}

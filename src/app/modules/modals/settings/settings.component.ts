import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ModalsControlerService } from '@app/modules/modals/modals-controler.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
    constructor(private modalsControlerService: ModalsControlerService) {}

    ngOnInit(): void {}

    closeModal(e: MouseEvent) {
        e.stopPropagation();
        this.modalsControlerService.closeModal();
    }
}

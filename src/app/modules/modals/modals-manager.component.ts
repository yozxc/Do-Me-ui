import { Observable } from 'rxjs';
import { ModalsControlerService } from './modals-controler.service';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modals-manager',
    templateUrl: './modals-manager.component.html',
    styleUrls: ['./modals-manager.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalsManagerComponent implements OnInit, AfterViewInit {
    controler!: Observable<string>;

    constructor(public MCS: ModalsControlerService) {}

    ngOnInit(): void {
        this.controler = this.MCS.getControler();
    }

    // todo : dev temp
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.MCS.openSettings();
        }, 0);
    }
}

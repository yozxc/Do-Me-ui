import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-place-sub-list',
    templateUrl: './main-place-sub-list.component.html',
    styleUrls: ['./main-place-sub-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPlaceSubListComponent implements OnInit {
    isClosed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {}

    ngOnInit(): void {}

    toggleIsClosed() {
        this.isClosed$.next(!this.isClosed$.getValue());
    }
}

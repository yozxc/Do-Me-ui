import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-workspace-place-sub-list',
    templateUrl: './workspace-place-sub-list.component.html',
    styleUrls: ['./workspace-place-sub-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspacePlaceSubListComponent implements OnInit {
    isClosed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {}

    ngOnInit(): void {}

    toggleIsClosed() {
        this.isClosed$.next(!this.isClosed$.getValue());
    }
}

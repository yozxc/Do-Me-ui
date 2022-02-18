import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-sub-list',
    templateUrl: './list-sub-list.component.html',
    styleUrls: ['./list-sub-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSubListComponent implements OnInit {
    title: string = 'Overdue';

    isChangingTitle: boolean = false;
    isClosed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {}

    ngOnInit(): void {}

    saveTitle(title: string) {
        this.title = title;
        this.isChangingTitle = false;
    }

    toggleIsClosed() {
        this.isClosed$.next(!this.isClosed$.getValue());
    }
}

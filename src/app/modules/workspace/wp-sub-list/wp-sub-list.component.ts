import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-wp-sub-list',
    templateUrl: './wp-sub-list.component.html',
    styleUrls: ['./wp-sub-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WpSubListComponent implements OnInit {
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

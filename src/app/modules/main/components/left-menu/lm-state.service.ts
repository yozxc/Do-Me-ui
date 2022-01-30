import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LmStateService {
    isClosed$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    toggleIsClosed() {
        this.isClosed$.next(!this.isClosed$.getValue());
    }

    constructor() {}
}

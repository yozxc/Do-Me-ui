import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { InboxState, InboxStore } from './inbox.store';

@Injectable()
export class InboxQuery extends Query<InboxState> {
    type$ = this.select((state) => state.type);

    constructor(protected override store: InboxStore) {
        super(store);
    }
}

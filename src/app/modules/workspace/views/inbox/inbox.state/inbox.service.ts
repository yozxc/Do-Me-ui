/* eslint-disable no-unused-labels */
import { Injectable } from '@angular/core';
import { ViewType } from '@app/core/types/domain/project';
import { InboxStore } from './inbox.store';

@Injectable()
export class InboxService {
    constructor(private inboxStore: InboxStore) {}

    updateType(type: ViewType) {
        this.inboxStore.update((state) => ({ ...state, type }));
    }
}

import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { LeftMenuState, LeftMenuStore } from './left-menu.store';

@Injectable()
export class LeftMenuQuery extends Query<LeftMenuState> {
    collapsed$ = this.select((state) => state.collapsed);

    constructor(protected override store: LeftMenuStore) {
        super(store);
    }
}

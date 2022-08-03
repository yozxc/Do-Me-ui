/* eslint-disable no-unused-labels */
import { Injectable } from '@angular/core';
import { LeftMenuStore } from './left-menu.store';

@Injectable()
export class LeftMenuService {
    constructor(private leftMenuStore: LeftMenuStore) {}

    collapseLeftMenu() {
        this.leftMenuStore.update({ collapsed: false });
    }
    expandLeftMenu() {
        this.leftMenuStore.update({ collapsed: true });
    }
    toggleColapsed() {
        this.leftMenuStore.update((state) => ({ ...state, collapsed: !state.collapsed }));
    }
}

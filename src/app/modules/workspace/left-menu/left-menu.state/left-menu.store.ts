import { Store, StoreConfig } from '@datorama/akita';

export interface LeftMenuState {
    collapsed: boolean;
}

export function createInitialState(): LeftMenuState {
    return {
        collapsed: true
    };
}

@StoreConfig({ name: 'left_menu' })
export class LeftMenuStore extends Store<LeftMenuState> {
    constructor() {
        super(createInitialState());
    }
}

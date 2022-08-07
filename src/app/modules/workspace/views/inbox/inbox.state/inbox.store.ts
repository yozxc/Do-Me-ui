import { ViewType } from '@app/core/types/domain/project';
import { Store, StoreConfig } from '@datorama/akita';

export interface InboxState {
    type: ViewType;
}

export function createInitialState(): InboxState {
    return {
        type: 'BOARD'
    };
}

@StoreConfig({ name: 'inbox' })
export class InboxStore extends Store<InboxState> {
    constructor() {
        super(createInitialState());
    }
}

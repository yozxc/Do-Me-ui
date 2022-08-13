import { Injectable } from '@angular/core';
import { Section } from '@app/core/types/domain/section';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { StoreFields } from '../store.fields';

export interface SectionsState extends EntityState<Section, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: StoreFields.SECTIONS })
export class SectionsStore extends EntityStore<SectionsState> {
    constructor() {
        super();
    }
}

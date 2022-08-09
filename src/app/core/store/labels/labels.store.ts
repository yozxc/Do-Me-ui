import { Injectable } from '@angular/core';
import { Label } from '@app/core/types/domain/label';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { StoreFields } from '../store.fields';

export interface LabelsState extends EntityState<Label, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: StoreFields.LABELS })
export class LabelsStore extends EntityStore<LabelsState> {
    constructor() {
        super();
    }
}

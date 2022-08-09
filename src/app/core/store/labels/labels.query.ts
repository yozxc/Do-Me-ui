import { Injectable } from '@angular/core';
import { Label } from '@app/core/types/domain/label';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { LabelsState, LabelsStore } from './labels.store';

@Injectable({ providedIn: 'root' })
export class LabelsQuery extends QueryEntity<LabelsState> {
    labels$ = this.selectAll();

    constructor(protected override store: LabelsStore) {
        super(store);
    }

    selectLabel(id: string) {
        return this.selectEntity(id) as Observable<Label>;
    }

    getLabel(id: string): Label | undefined {
        return this.getEntity(id);
    }
}

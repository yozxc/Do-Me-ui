import { Injectable } from '@angular/core';
import { Section } from '@app/core/types/domain/section';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { SectionsState, SectionsStore } from './sections.store';

@Injectable({ providedIn: 'root' })
export class SectionsQuery extends QueryEntity<SectionsState> {
    constructor(protected override store: SectionsStore) {
        super(store);
    }

    selectSection(id: string) {
        return this.selectEntity(id) as Observable<Section>;
    }
}

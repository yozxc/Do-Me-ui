import { Injectable } from '@angular/core';
import { Section } from '@app/core/types/domain/section';
import { QueryEntity } from '@datorama/akita';
import { map, Observable } from 'rxjs';
import { SectionsState, SectionsStore } from './sections.store';

@Injectable({ providedIn: 'root' })
export class SectionsQuery extends QueryEntity<SectionsState> {
    constructor(protected override store: SectionsStore) {
        super(store);
    }

    selectSection(id: string) {
        return this.selectEntity(id) as Observable<Section>;
    }

    selectInboxSectionsID() {
        return this.selectAll({
            filterBy: ({ projectID }) => !projectID
        }).pipe(map((sections) => sections.map((section) => section.id)));
    }

    getSection(id: string): Section | undefined {
        return this.getEntity(id);
    }

    selectInboxSections(): Observable<Section[]> {
        return this.selectAll({
            filterBy: (section) => !section.projectID
        });
    }
}

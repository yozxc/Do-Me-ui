import { ProjectsStore } from './../projects/projects.store';
/* eslint-disable no-unused-labels */
import { Injectable } from '@angular/core';
import { AddSectionDTO, Section } from '@app/core/types/domain/section';
import { arrayAdd } from '@datorama/akita';
import { v4 } from 'uuid';
import { SectionsStore } from './sections.store';

@Injectable({ providedIn: 'root' })
export class SectionsService {
    constructor(private sectionsStore: SectionsStore, private projectsStore: ProjectsStore) {}

    addSection(sectionData: AddSectionDTO) {
        const addSection: Section = { ...sectionData, id: v4(), tasksID: [] };
        this.sectionsStore.add(addSection);

        sectionData.projectID &&
            this.projectsStore.update(sectionData.projectID, ({ sectionsID }) => ({
                sectionsID: arrayAdd(sectionsID, addSection.id)
            }));

        return addSection.id;
    }

    updateTitle(sectionID: string, title: string) {
        this.sectionsStore.update(sectionID, { title });
    }
}

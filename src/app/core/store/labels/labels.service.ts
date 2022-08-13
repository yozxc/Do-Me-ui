/* eslint-disable no-unused-labels */
import { Injectable } from '@angular/core';
import { AddLabelData, Label } from '@app/core/types/domain/label';
import { labelsList } from '@mocks/labelsList';
import { v4 } from 'uuid';
import { LabelsStore } from './labels.store';

@Injectable({ providedIn: 'root' })
export class LabelsService {
    constructor(private labelsStore: LabelsStore) {}

    addLabel(label: AddLabelData) {
        this.labelsStore.add({ ...label, id: v4(), tasksID: [] });
    }

    updateName(id: string, name: string) {
        this.labelsStore.update(id, { name });
    }

    // todo : dev temp
    setLabels() {
        this.labelsStore.add(labelsList as Label[]);
    }
}

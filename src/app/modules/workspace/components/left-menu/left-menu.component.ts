import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { projects, labels, filters, favorites } from '@assets/mock/lm-projects';

import { LmStateService } from './lm-state.service';
import { ModalsControlerService } from '@app/modules/modals/modals-controler.service';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftMenuComponent implements OnInit, OnDestroy {
    projects: any;
    labels: any;
    filters: any;
    favorites: any;

    isClosed!: boolean;
    isClosedSub!: Subscription;

    activeLabels = {
        favorites: true,
        projects: true,
        labels: true,
        filters: true,
    };

    constructor(
        private lmStateService: LmStateService,
        private cdr: ChangeDetectorRef,
        private modalsControlerService: ModalsControlerService
    ) {}

    ngOnInit(): void {
        // todo : change this :\
        this.projects = projects;
        this.labels = labels;
        this.filters = filters;
        this.favorites = favorites;

        this.isClosedSub = this.lmStateService.isClosed$.subscribe((val) => {
            this.isClosed = val;
            this.cdr.detectChanges();
        });
    }

    ngOnDestroy(): void {
        this.isClosedSub.unsubscribe();
    }

    classActive(cat: string) {
        if (cat === 'favorites') this.activeLabels[cat] = !this.activeLabels[cat];
        if (cat === 'projects') this.activeLabels[cat] = !this.activeLabels[cat];
        if (cat === 'labels') this.activeLabels[cat] = !this.activeLabels[cat];
        if (cat === 'filters') this.activeLabels[cat] = !this.activeLabels[cat];
    }

    projectPlusEvent(e: MouseEvent) {
        e.stopPropagation();
        this.modalsControlerService.openAddProject();
    }
    labelPlusEvent(e: MouseEvent) {
        e.stopPropagation();
        this.modalsControlerService.openAddLabel();
    }
    filterPlusEvent(e: MouseEvent) {
        e.stopPropagation();
        this.modalsControlerService.openAddFilter();
    }
}

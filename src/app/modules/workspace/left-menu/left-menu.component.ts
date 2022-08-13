import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabelsQuery } from '@core/store/labels/labels.query';
import { LeftMenuQuery } from './left-menu.state/left-menu.query';

import { ProjectsService } from '@app/core/store/projects/projects.service';

// todo : delete
import { LabelsService } from '@app/core/store/labels/labels.service';
import { ProjectsQuery } from '@app/core/store/projects/projects.query';
import { favorites, filters, labels } from '@assets/mock/lm-projects';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftMenuComponent implements OnInit {
    labels: any;
    filters: any;
    favorites: any;

    activeLabels = {
        favorites: false,
        projects: true,
        labels: true,
        filters: false
    };

    constructor(
        private cdr: ChangeDetectorRef,
        private router: Router,
        public leftMenuQuery: LeftMenuQuery,
        private projectsService: ProjectsService,
        private labelsService: LabelsService,
        public projectsQuery: ProjectsQuery,
        public labelsQuery: LabelsQuery
    ) {}

    ngOnInit(): void {
        // todo : change this :\
        this.labels = labels;
        this.filters = filters;
        this.favorites = favorites;

        this.projectsService.setProjects();
        this.labelsService.setLabels();
    }

    classActive(cat: string) {
        if (cat === 'favorites') this.activeLabels[cat] = !this.activeLabels[cat];
        if (cat === 'projects') this.activeLabels[cat] = !this.activeLabels[cat];
        if (cat === 'labels') this.activeLabels[cat] = !this.activeLabels[cat];
        if (cat === 'filters') this.activeLabels[cat] = !this.activeLabels[cat];
    }

    navTo(url: string) {
        this.router.navigateByUrl(url);
    }
}

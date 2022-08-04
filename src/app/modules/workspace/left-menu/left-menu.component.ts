import { LeftMenuQuery } from './left-menu.state/left-menu.query';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsService } from '@app/core/store/projects/projects.service';
import { PAGES_ROUTE } from '@app/core/router/nav-constants';

import { Project } from '@app/core/types/projectType';
// todo : delete
import { favorites, filters, labels, projects } from '@assets/mock/lm-projects';
import { ProjectsTodosQuery } from '@app/core/store/projects/projects.query';

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
        filters: true
    };

    constructor(
        private cdr: ChangeDetectorRef,
        private router: Router,
        public leftMenuQuery: LeftMenuQuery,
        public projectsTodosQuery: ProjectsTodosQuery,
        public projectsService: ProjectsService
    ) {}

    ngOnInit(): void {
        // todo : change this :\
        this.labels = labels;
        this.filters = filters;
        this.favorites = favorites;

        this.projectsTodosQuery.projects$.subscribe((val) => console.log(val));

        this.projectsService.setProjects();
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

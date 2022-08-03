import { LeftMenuQuery } from './left-menu.state/left-menu.query';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PAGES_ROUTE } from '@app/core/router/nav-constants';

import { ProjectsService } from '@app/core/services/data/projects/projects.service';

import { Project } from '@app/core/types/projectType';
// todo : delete
import { favorites, filters, labels, projects } from '@assets/mock/lm-projects';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftMenuComponent implements OnInit, OnDestroy {
    projects?: Project[];
    labels: any;
    filters: any;
    favorites: any;

    projectsSub$?: any;

    activeLabels = {
        favorites: false,
        projects: true,
        labels: true,
        filters: true
    };

    constructor(
        private cdr: ChangeDetectorRef,
        private router: Router,
        private projectsService: ProjectsService,
        public leftMenuQuery: LeftMenuQuery
    ) {}

    ngOnInit(): void {
        // todo : change this :\
        this.projects = projects;
        this.labels = labels;
        this.filters = filters;
        this.favorites = favorites;

        this.projectsSub$ = this.projectsService.getProjectListSub().subscribe((val) => {
            this.projects = val;
            this.cdr.detectChanges();
            // todo : delete
            console.log(val);
        });
    }

    ngOnDestroy(): void {
        this.projectsSub$.unsubscribe();
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

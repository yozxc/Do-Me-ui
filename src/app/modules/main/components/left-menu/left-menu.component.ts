import { Component, OnInit } from '@angular/core';
import { projects, labels, filters, favorites } from '@assets/mock/lm-projects';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit {
    projects: any;
    labels: any;
    filters: any;
    favorites: any;

    activeLabels = {
        favorites: true,
        projects: true,
        labels: true,
        filters: true,
    };

    constructor() {
        this.projects = projects;
        this.labels = labels;
        this.filters = filters;
        this.favorites = favorites;
    }

    ngOnInit(): void {}

    classActive(cat: string) {
        switch (cat) {
            case 'favorites':
                this.activeLabels[cat] = !this.activeLabels[cat];
                break;
            case 'projects':
                this.activeLabels[cat] = !this.activeLabels[cat];
                break;
            case 'labels':
                this.activeLabels[cat] = !this.activeLabels[cat];
                break;
            case 'filters':
                this.activeLabels[cat] = !this.activeLabels[cat];
                break;
        }
    }
}

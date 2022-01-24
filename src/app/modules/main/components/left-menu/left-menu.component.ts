import { Component, Input, OnInit } from '@angular/core';
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

    @Input() menuIsClosed: boolean = false;

    constructor() {
        this.projects = projects;
        this.labels = labels;
        this.filters = filters;
        this.favorites = favorites;
    }

    ngOnInit(): void {}

    classActive(cat: string) {
        if (cat === 'favorites') this.activeLabels[cat] = !this.activeLabels[cat];
        if (cat === 'projects') this.activeLabels[cat] = !this.activeLabels[cat];
        if (cat === 'labels') this.activeLabels[cat] = !this.activeLabels[cat];
        if (cat === 'filters') this.activeLabels[cat] = !this.activeLabels[cat];
    }

    toggleMenu() {
        this.menuIsClosed = !this.menuIsClosed;
    }

    projPlusEvent(e: MouseEvent) {
        e.stopPropagation();
    }
    favPlusEvent(e: MouseEvent) {
        e.stopPropagation();
    }
    filtPlusEvent(e: MouseEvent) {
        e.stopPropagation();
    }
}

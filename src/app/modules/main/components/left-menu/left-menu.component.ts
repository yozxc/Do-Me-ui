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

    constructor() {
        this.projects = projects;
        this.labels = labels;
        this.filters = filters;
        this.favorites = favorites;
    }

    ngOnInit(): void {}
}

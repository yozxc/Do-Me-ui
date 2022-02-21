import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-add-section',
    templateUrl: './list-add-section.component.html',
    styleUrls: ['./list-add-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListAddSectionComponent implements OnInit {
    isOnAdd: boolean = false;

    constructor() {}

    ngOnInit(): void {}
}

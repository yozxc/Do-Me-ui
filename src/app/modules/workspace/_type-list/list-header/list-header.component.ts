import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-header',
    templateUrl: './list-header.component.html',
    styleUrls: ['./list-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListHeaderComponent implements OnInit {
    isOnEdit: boolean = false;
    date: number = Date.now();

    @Input() title!: string;
    @Input() dateDisplay: boolean = false;
    @Input() editableTitle: boolean = true;

    constructor() {}

    ngOnInit(): void {}
}
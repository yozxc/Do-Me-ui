import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
    @Input() projID: number = 123;

    constructor() {}

    ngOnInit(): void {}
}

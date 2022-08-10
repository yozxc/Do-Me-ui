import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-board-column-header',
    templateUrl: './board-column-header.component.html',
    styleUrls: ['./board-column-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardColumnHeaderComponent {
    isChangingTitle: boolean = false;

    @Input() title!: string;
    @Input() editableTitle: boolean = true;

    @Output() setTitleEvent: EventEmitter<string> = new EventEmitter();

    constructor() {}

    saveTitle(title: string) {
        this.setTitleEvent.emit(title);
        this.isChangingTitle = false;
    }
}

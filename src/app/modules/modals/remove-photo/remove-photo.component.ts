import { Component, OnInit } from '@angular/core';
import { ModalsControlerService } from '../modals-controler.service';

@Component({
    selector: 'app-remove-photo',
    templateUrl: './remove-photo.component.html',
    styleUrls: ['./remove-photo.component.scss'],
})
export class RemovePhotoComponent implements OnInit {
    constructor(private MCS: ModalsControlerService) {}

    ngOnInit(): void {}

    onClose(e: MouseEvent) {
        e.stopPropagation();
        this.MCS.closeModal();
    }
}

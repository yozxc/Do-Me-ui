import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quick-add',
    templateUrl: './quick-add.component.html',
    styleUrls: ['./quick-add.component.scss'],
})
export class QuickAddComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    onClose() {
        this.router.navigate([this.router.url]);
    }
}

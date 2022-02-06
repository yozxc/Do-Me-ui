import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ModalsControlerService {
    constructor(private router: Router) {}

    addProj() {
        this.router.navigate([{ outlets: { MODALS: 'addProject' } }], { skipLocationChange: false });
    }
}

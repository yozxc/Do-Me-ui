import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModalsControlerService {
    controler$ = new Subject<string>();

    constructor() {}

    openAddProject() {
        this.controler$.next('addProject');
    }

    openAddLabel() {
        this.controler$.next('addLabel');
    }

    openAddFilter() {
        this.controler$.next('addFilter');
    }

    closeModal() {
        this.controler$.next('');
    }

    getControler() {
        return this.controler$.asObservable();
    }
}

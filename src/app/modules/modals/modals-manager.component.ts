import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-modals-manager',
    template: `<router-outlet name="modals"></router-outlet>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalsManagerComponent {
    constructor() {}
}

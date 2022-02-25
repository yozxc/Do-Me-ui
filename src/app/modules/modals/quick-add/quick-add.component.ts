import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quick-add',
    templateUrl: './quick-add.component.html',
    styleUrls: ['./quick-add.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickAddComponent {
    constructor(private router: Router) {}

    onClose() {
        this.router.navigate([this.router.url]);
    }
}

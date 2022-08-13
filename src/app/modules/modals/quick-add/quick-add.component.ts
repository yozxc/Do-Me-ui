import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PriorityType } from '@app/core/types/domain/priority';

// todo : onClose browser console warn
@Component({
    selector: 'app-quick-add',
    templateUrl: './quick-add.component.html',
    styleUrls: ['./quick-add.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickAddComponent implements OnInit {
    addButtonDisabled: boolean = true;

    addTaskForm = this.fb.group({
        name: '',
        description: '',
        priority: 4
    });

    constructor(private router: Router, private fb: UntypedFormBuilder) {}

    ngOnInit(): void {
        this.addTaskForm.get('name')?.valueChanges.subscribe((value) => (this.addButtonDisabled = !value.length));
    }

    resetForm() {
        if (!this.addButtonDisabled) {
            this.addTaskForm.setValue({
                name: '',
                description: '',
                priority: 4
            });
        }
    }

    changePriority(priority: PriorityType) {
        this.addTaskForm.patchValue({
            priority: priority
        });
    }

    onClose() {
        this.resetForm();
        this.router.navigateByUrl(this.router.url.replace('(', '').split('//')[0]);
    }
}

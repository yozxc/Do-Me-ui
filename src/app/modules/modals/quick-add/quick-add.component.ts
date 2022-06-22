import { PriorityType } from '@app/core/types/priorityType';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

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
        taskName: '',
        taskDescription: '',
        priority: 4
    });

    constructor(private router: Router, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.addTaskForm.get('taskName')?.valueChanges.subscribe((value) => (this.addButtonDisabled = !value.length));
    }

    resetForm() {
        if (!this.addButtonDisabled) {
            this.addTaskForm.setValue({
                taskName: '',
                taskDescription: '',
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

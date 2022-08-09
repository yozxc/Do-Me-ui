import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';
import { ProjectsService } from '@app/core/store/projects/projects.service';
import { ViewType } from '@app/core/types/domain/project';

@Component({
    selector: 'app-add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProjectComponent implements OnInit {
    __addButtonDisabled: boolean = true;

    form = this.fb.group({
        title: '',
        colorCls: 'berryRed',
        type: 'LIST',
        favorites: false
    });

    constructor(private router: Router, private fb: UntypedFormBuilder, private projectsService: ProjectsService) {}

    ngOnInit(): void {
        this.form.get('title')?.valueChanges.subscribe((value) => (this.__addButtonDisabled = !value.length));
    }

    changeType(type: ViewType) {
        this.form.patchValue({
            type: type
        });
    }

    onCancel() {
        this.router.navigateByUrl(this.router.url.replace('(', '').split('//')[0]);
    }

    onSave() {
        this.projectsService.addProject(this.form.value);

        this.router.navigateByUrl(this.router.url.replace('(', '').split('//')[0]);
    }
}

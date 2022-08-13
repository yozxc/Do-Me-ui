import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from '@app/core/store/projects/projects.service';
import { AddProjectData, ViewType } from '@app/core/types/domain/project';

@Component({
    selector: 'app-add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProjectComponent implements OnInit {
    __addButtonDisabled: boolean = true;

    form = this.fb.group<AddProjectForm>({
        title: '',
        colorCls: 'berryRed',
        type: 'LIST',
        favorite: false,
        sectionsID: this.fb.array<string>([]),
        noSectionTasksID: this.fb.array<string>([])
    });

    constructor(private router: Router, private fb: FormBuilder, private projectsService: ProjectsService) {}

    ngOnInit(): void {
        this.form.valueChanges.subscribe((value) => (this.__addButtonDisabled = !value.title!.length));
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
        this.projectsService.addProject(this.form.value as AddProjectData);

        this.router.navigateByUrl(this.router.url.replace('(', '').split('//')[0]);
    }
}
interface AddProjectForm extends Omit<AddProjectData, 'sectionsID' | 'noSectionTasksID'> {
    sectionsID: FormArray<FormControl<string | null>>;
    noSectionTasksID: FormArray<FormControl<string | null>>;
}

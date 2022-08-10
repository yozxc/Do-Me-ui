import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSelectDropdownComponent } from './project-select-dropdown.component';

describe('ProjectSelectDropdownComponent', () => {
    let component: ProjectSelectDropdownComponent;
    let fixture: ComponentFixture<ProjectSelectDropdownComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectSelectDropdownComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectSelectDropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

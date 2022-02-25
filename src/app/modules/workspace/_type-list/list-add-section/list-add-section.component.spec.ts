import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddSectionComponent } from './list-add-section.component';

describe('ListAddSectionComponent', () => {
    let component: ListAddSectionComponent;
    let fixture: ComponentFixture<ListAddSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListAddSectionComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListAddSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAddSectionComponent } from './table-add-section.component';

describe('TableAddSectionComponent', () => {
    let component: TableAddSectionComponent;
    let fixture: ComponentFixture<TableAddSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TableAddSectionComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TableAddSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

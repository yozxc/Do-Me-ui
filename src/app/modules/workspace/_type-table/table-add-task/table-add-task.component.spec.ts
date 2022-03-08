import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAddTaskComponent } from './table-add-task.component';

describe('TableAddTaskComponent', () => {
    let component: TableAddTaskComponent;
    let fixture: ComponentFixture<TableAddTaskComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TableAddTaskComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TableAddTaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

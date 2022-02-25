import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddTaskComponent } from './list-add-task.component';

describe('ListAddTaskComponent', () => {
    let component: ListAddTaskComponent;
    let fixture: ComponentFixture<ListAddTaskComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListAddTaskComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListAddTaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

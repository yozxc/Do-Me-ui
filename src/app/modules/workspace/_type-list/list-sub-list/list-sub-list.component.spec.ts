import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubListComponent } from './list-sub-list.component';

describe('WorkspacePlaceSubListComponent', () => {
    let component: ListSubListComponent;
    let fixture: ComponentFixture<ListSubListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListSubListComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ListSubListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardColumnHeaderComponent } from './board-column-header.component';

describe('BoardColumnHeaderComponent', () => {
    let component: BoardColumnHeaderComponent;
    let fixture: ComponentFixture<BoardColumnHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BoardColumnHeaderComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BoardColumnHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

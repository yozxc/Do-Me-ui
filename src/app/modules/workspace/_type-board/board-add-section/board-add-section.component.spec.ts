import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAddSectionComponent } from './board-add-section.component';

describe('BoardAddSectionComponent', () => {
    let component: BoardAddSectionComponent;
    let fixture: ComponentFixture<BoardAddSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BoardAddSectionComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BoardAddSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

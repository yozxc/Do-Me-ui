import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuComponent } from './left-menu.component';
import { LmStateService } from './lm-state.service';

describe('LeftMenuComponent', () => {
    let component: LeftMenuComponent;
    let fixture: ComponentFixture<LeftMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LeftMenuComponent],
            // todo : mock services
            providers: [LmStateService]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LeftMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalsControlerService } from '@app/modules/modals/modals-controler.service';
import { LmStateService } from '../left-menu/lm-state.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            // todo : mock services
            providers: [LmStateService, ModalsControlerService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

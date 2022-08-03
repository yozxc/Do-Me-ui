import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuComponent } from './left-menu.component';
import { LeftMenuQuery } from './left-menu.state/left-menu.query';

describe('LeftMenuComponent', () => {
    let component: LeftMenuComponent;
    let fixture: ComponentFixture<LeftMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LeftMenuComponent],
            providers: [LeftMenuQuery]
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

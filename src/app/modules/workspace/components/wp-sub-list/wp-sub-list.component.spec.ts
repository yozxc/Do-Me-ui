import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpSubListComponent } from './wp-sub-list.component';

describe('WorkspacePlaceSubListComponent', () => {
    let component: WpSubListComponent;
    let fixture: ComponentFixture<WpSubListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WpSubListComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WpSubListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

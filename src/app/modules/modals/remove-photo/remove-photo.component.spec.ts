import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePhotoComponent } from './remove-photo.component';

describe('RemovePhotoComponent', () => {
    let component: RemovePhotoComponent;
    let fixture: ComponentFixture<RemovePhotoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RemovePhotoComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RemovePhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

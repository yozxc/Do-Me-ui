import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlaceSubListComponent } from './main-place-sub-list.component';

describe('MainPlaceSubListComponent', () => {
  let component: MainPlaceSubListComponent;
  let fixture: ComponentFixture<MainPlaceSubListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlaceSubListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlaceSubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuDropdownComponent } from './view-menu-dropdown.component';

describe('ViewMenuDropdownComponent', () => {
  let component: ViewMenuDropdownComponent;
  let fixture: ComponentFixture<ViewMenuDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMenuDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

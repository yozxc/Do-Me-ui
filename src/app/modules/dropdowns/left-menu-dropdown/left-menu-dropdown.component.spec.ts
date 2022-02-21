import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuDropdownComponent } from './left-menu-dropdown.component';

describe('LeftMenuDropdownComponent', () => {
  let component: LeftMenuDropdownComponent;
  let fixture: ComponentFixture<LeftMenuDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftMenuDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

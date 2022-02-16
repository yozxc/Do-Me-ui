import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpAddSectionComponent } from './wp-add-section.component';

describe('WpAddSectionComponent', () => {
  let component: WpAddSectionComponent;
  let fixture: ComponentFixture<WpAddSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpAddSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WpAddSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

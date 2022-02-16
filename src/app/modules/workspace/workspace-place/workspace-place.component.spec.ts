import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacePlaceComponent } from './workspace-place.component';

describe('WorkspacePlaceComponent', () => {
  let component: WorkspacePlaceComponent;
  let fixture: ComponentFixture<WorkspacePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspacePlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspacePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

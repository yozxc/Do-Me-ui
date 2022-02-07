import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacePlaceSubListComponent } from './workspace-place-sub-list.component';

describe('WorkspacePlaceSubListComponent', () => {
  let component: WorkspacePlaceSubListComponent;
  let fixture: ComponentFixture<WorkspacePlaceSubListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspacePlaceSubListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspacePlaceSubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBranchComponent } from './dashboard-branch.component';

describe('DashboardBranchComponent', () => {
  let component: DashboardBranchComponent;
  let fixture: ComponentFixture<DashboardBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardBranchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

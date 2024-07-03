import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClassGroupComponent } from './dashboard-class-group.component';

describe('DashboardClassGroupComponent', () => {
  let component: DashboardClassGroupComponent;
  let fixture: ComponentFixture<DashboardClassGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardClassGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClassGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsmPageDashboardComponent } from './dsm-page-dashboard.component';

describe('DsmPageDashboardComponent', () => {
  let component: DsmPageDashboardComponent;
  let fixture: ComponentFixture<DsmPageDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DsmPageDashboardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsmPageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

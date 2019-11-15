import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsmCommToolbarComponent } from './dsm-comm-toolbar.component';

describe('DsmCommToolbarComponent', () => {
  let component: DsmCommToolbarComponent;
  let fixture: ComponentFixture<DsmCommToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DsmCommToolbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsmCommToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

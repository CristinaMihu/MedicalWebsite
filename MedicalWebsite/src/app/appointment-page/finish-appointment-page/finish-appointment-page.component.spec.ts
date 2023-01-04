import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishAppointmentPageComponent } from './finish-appointment-page.component';

describe('FinishAppointmentPageComponent', () => {
  let component: FinishAppointmentPageComponent;
  let fixture: ComponentFixture<FinishAppointmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishAppointmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

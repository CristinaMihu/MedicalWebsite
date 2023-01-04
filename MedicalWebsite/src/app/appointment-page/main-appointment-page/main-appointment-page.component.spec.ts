import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppointmentPageComponent } from './main-appointment-page.component';

describe('MainAppointmentPageComponent', () => {
  let component: MainAppointmentPageComponent;
  let fixture: ComponentFixture<MainAppointmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAppointmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment-service.service';

@Component({
  selector: 'app-finish-appointment-page',
  templateUrl: './finish-appointment-page.component.html',
  styleUrls: ['./finish-appointment-page.component.scss']
})
export class FinishAppointmentPageComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) { }

  email = '';
  firstName = '';
  lastName = '';
  location = '';
  department = '';
  date = '';

  ngOnInit(): void {
    this.email = this.appointmentService.email;
    this.firstName = this.appointmentService.firstName;
    this.lastName = this.appointmentService.lastName;
    this.location = this.appointmentService.location;
    this.department = this.appointmentService.department;
    this.date = this.appointmentService.date;
  }

}

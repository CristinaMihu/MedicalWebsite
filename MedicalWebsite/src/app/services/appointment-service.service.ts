import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  email = '';
  firstName = '';
  lastName = '';
  location = '';
  department = '';
  date = '';
  
  setDetails(email: string, firstName: string, lastName: string, location: string, department: string, date: string){
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.department = department;
    this.date = date;
  }

}

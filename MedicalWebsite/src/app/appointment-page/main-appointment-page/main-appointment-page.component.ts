import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment-service.service';

export interface LocationDepartmentDoctor {
  value: string;
}

@Component({
  selector: 'app-main-appointment-page',
  templateUrl: './main-appointment-page.component.html',
  styleUrls: ['./main-appointment-page.component.scss']
})

export class MainAppointmentPageComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private router: Router,
    private appointmentService: AppointmentService) { }

  myForm: FormGroup = new FormGroup({});
  selectedLocation = '';

  locations: LocationDepartmentDoctor[] = [
    { value: 'London, Addle Street, no. 3' },
    { value: 'London, Brick Street, no. 147' },
    { value: 'London, Carlisle Avenue, no. 15' },
    { value: 'Manchester, Deansgate Street, no. 9' },
    { value: 'Manchester, Kingsway Street, no. 158' },
    { value: 'Nottingham, Aberfort Avenue, no. 85' },

  ];

  departments: LocationDepartmentDoctor[] = [
    { value: 'Cardiology' },
    { value: 'Diagnostic Imaging' },
    { value: 'Elderly services' },
    { value: 'Gastroenterology' },
    { value: 'Obstetrics/Gynecology' },
    { value: 'Nephrology' },
    { value: 'Neurology' },
    { value: 'Oncology' },
    { value: 'Ophthalmology' },
    { value: 'Orthopaedics' },
    { value: 'Physiotherapy' },
    { value: 'Radiology' },
    { value: 'Rheumatology' },
    { value: 'Sexual Health' }
  ];

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      locationControl: ['', [Validators.required]],
      departmentControl: ['', [Validators.required]],
      matDatepicker: ['', [Validators.required]],

      updateOn: 'blur'
      })
  }

  onFinish(){
    this.appointmentService.setDetails(this.email?.value, this.firstName?.value, this.lastName?.value, this.locationControl?.value, this.departmentControl?.value, this.matDatepicker?.value);
    this.router.navigate(["/appointment/finish-appointment"]);
  }

  get firstName() {
    return this.myForm.get("firstName");
  }

  get lastName() {
    return this.myForm.get("lastName");
  }

  get email() {
    return this.myForm.get("email");
  }

  get locationControl() {
    return this.myForm.get("locationControl");
  }

  get departmentControl() {
    return this.myForm.get("departmentControl");
  }

  get matDatepicker() {
    return this.myForm.get("matDatepicker");
  }

  getErrorMessageFirstName() {
    return this.myForm.get("firstName")?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageLastName() {
    return this.myForm.get("lastName")?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageEmail() {
    return this.myForm.get("email")?.hasError('required') ? 'You must enter a value' : true;
  }

}

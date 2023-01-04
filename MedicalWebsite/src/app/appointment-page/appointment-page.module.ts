import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentPageRoutingModule } from './appointment-page-routing.module';
import { MainAppointmentPageComponent } from './main-appointment-page/main-appointment-page.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FinishAppointmentPageComponent } from './finish-appointment-page/finish-appointment-page.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MainAppointmentPageComponent, FinishAppointmentPageComponent],
  imports: [
    CommonModule,
    AppointmentPageRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class AppointmentPageModule { }

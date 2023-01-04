import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishAppointmentPageComponent } from './finish-appointment-page/finish-appointment-page.component';
import { MainAppointmentPageComponent } from './main-appointment-page/main-appointment-page.component';

const routes: Routes = [
    {
        path: '', component: MainAppointmentPageComponent
    },
    {
        path: 'finish-appointment', component: FinishAppointmentPageComponent
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentPageRoutingModule { }

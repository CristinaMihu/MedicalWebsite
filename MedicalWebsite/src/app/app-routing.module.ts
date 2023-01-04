import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageSuccessfulComponent } from './login-page-successful/login-page-successful.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageSuccessfulComponent } from './register-page-successful/register-page-successful.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'appointment',
    loadChildren: () => import('./appointment-page/appointment-page.module').then(mod => mod.AppointmentPageModule)
  },
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'register',
    component: RegisterPageComponent
  },
  {
    path: 'login-successful',
    component: LoginPageSuccessfulComponent
  },
  {
    path: 'register-successful',
    component: RegisterPageSuccessfulComponent
  },
  {
    path:'MyFavorites',
    component: MyFavoritesComponent
  },
  {
    path: 'home-page',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

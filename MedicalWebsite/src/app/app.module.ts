import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FirebaseService } from './services/firebase.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginPageSuccessfulComponent } from './login-page-successful/login-page-successful.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RegisterPageSuccessfulComponent } from './register-page-successful/register-page-successful.component';
import { CookieService } from 'ngx-cookie-service';

import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddElementComponent } from './modals/add-element/add-element.component';
import { EditElementComponent } from './modals/edit-element/edit-element.component';
import { HomePageModule } from './home-page/home-page.module';



@NgModule({
  declarations: [
    AppComponent,
    MyFavoritesComponent,
    AddElementComponent,
    EditElementComponent,
    LoginPageComponent,
    LoginPageSuccessfulComponent,
    RegisterPageComponent,
    RegisterPageSuccessfulComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatCheckboxModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCfuuTtz-bvtp0nDHKATnHy_0R9JMhiXoU",
      authDomain: "medicalwebsite-16c0c.firebaseapp.com",
      projectId: "medicalwebsite-16c0c",
      storageBucket: "medicalwebsite-16c0c.appspot.com",
      messagingSenderId: "620008568083",
      appId: "1:620008568083:web:b3257361614927a4e196e6"
    }),
    
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatSortModule,
    MatDialogModule,
    HomePageModule
  ],
  providers: [FirebaseService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

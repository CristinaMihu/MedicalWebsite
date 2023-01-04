import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LogoutService } from 'src/app/services/logout.service';
import { CustomValidators } from '../utils/custom-validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  checked = false;
  email = '';
  password = '';

  hide = true;
  myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    public firebaseService: FirebaseService,
    public logoutService: LogoutService
  ) {

    if (this.logoutService.cookieService.check("cookieEmail"))
      this.checked = true;
    this.email = logoutService.cookieService.get('cookieEmail');
    this.password = logoutService.cookieService.get('cookiePassword');
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      emailLogin: [this.email, Validators.compose(
        [Validators.required]
      )],

      passwordLogin: [this.password,
      {
        validators: [
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            CustomValidators.passwordStrength()
          ])
        ],
        updateOn: 'blur'
      }],

    })
  }

  onClickRememberMe() {
    console.log(this.checked);
    if (this.checked == false) //first time user clicked the button (checked)
    {
      this.logoutService.rememberMe(this.emailLogin?.value, this.passwordLogin?.value);
    }
    else {
      this.logoutService.cookieService.deleteAll();
    }

  }

  async onLogin(email: string, password: string) {
    await this.firebaseService.login(email, password)
    if (this.firebaseService.isLoggedin)
      this.logoutService.login();
  }

  get emailLogin() {
    return this.myForm.get("emailLogin");
  }

  get passwordLogin() {
    return this.myForm.get("passwordLogin");
  }

  getErrorMessageRequiredEmailLogin() {
    return this.myForm.get("emailLogin")?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageRequiredEmailRegister() {
    return this.myForm.get("emailRegister")?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageRequiredPasswordLogin() {
    return this.passwordLogin?.hasError('required') ? 'You must enter a value' : true;
  }

  getErrorMessageStrengthPasswordLogin() {
    return this.passwordLogin?.errors?.passwordStrength ? 'Your password must contain at least one capital letter, one small letter, one digit and one special character' : true;
  }

  getErrorMessageLengthPasswordLogin() {
    return this.passwordLogin?.hasError('minlength') ? 'Your password must be at least 6 characters long' : true;
  }

}

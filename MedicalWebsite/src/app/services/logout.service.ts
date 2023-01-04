import { Injectable, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { FirebaseService } from './firebase.service';


@Injectable({
    providedIn: 'root'
})
export class LogoutService {

    constructor(public firebaseService: FirebaseService, public cookieService: CookieService) { }

    // Observable string sources
    private isLogout = new Subject<boolean>();
    private userName = new Subject<string>();

    // Observable string streams
    isLogout$ = this.isLogout.asObservable();
    userName$ = this.userName.asObservable();

    // Service message commands
    logout() {
        this.firebaseService.logout()
        this.isLogout.next(true);
        this.userName.next("User");
    }

    login() {
        this.userName.next(this.firebaseService.loginFunctionToGetUsername(this.userName));
        this.isLogout.next(false);
    }

    rememberMe(email: string, password: string) {
        this.cookieService.set("cookieEmail", email);
        this.cookieService.set("cookiePassword", password);
    }
}

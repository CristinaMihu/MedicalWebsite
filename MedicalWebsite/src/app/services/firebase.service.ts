import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedin = false;
  userName: any;

  constructor(
    public firebaseAuth : AngularFireAuth,
    private _snackBar: MatSnackBar,
    private router: Router
    ) { }

  async login(email:string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=>{
      localStorage.setItem('user', JSON.stringify(res.user))

      this.isLoggedin = true
      this.userName = res.user?.displayName
      
      console.log(this.userName)

      this.router.navigate(["/login-successful"])

    }, error => {
      this.openSnackBar(error.message, "close");
      this.isLoggedin = false;
    })
  }

  async register(email: string, password: string, firstName: string, lastName: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.user))

        //adding name for user in order to show it in "welcome, user" on home page
        this.UpdateProfile(firstName + " " + lastName);

        console.log(this.userName)

        this.isLoggedin = true

        this.router.navigate(["/register-successful"])
      }, error => {
        this.openSnackBar(error.message, "close");
        this.isLoggedin = false;
      })
  }

  async UpdateProfile(displayName: string) {
    const profile = {
      displayName: displayName
    }

    this.userName = displayName

    return (await this.firebaseAuth.currentUser)?.updateProfile(profile);
  }

  logout(){
    this.firebaseAuth.signOut()
    //localStorage.removeItem('user') --> this should be used for delete account

    //navigate to home if logged out
    this.router.navigate(["home-page"])
  }

  loginFunctionToGetUsername(userName: any){
    userName = this.userName;
    return userName;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

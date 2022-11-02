import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const AUTH_API_KEY=
        "AIzaSyA9gsk7xpG0WIT5BwtF__5isqTt3Zho3Lc"
const SIGN_UP_URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]"
const SIGN_IN_URL =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]"

export interface AuthResponseData {

          kind: string;
          idToken: string;
          email: string;
          refreshToken: string;
          expiresIn: string;
          localId: string;
          registered?: boolean;
}

export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: string;



}



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userToken: string = null
  currentUser = new BehaviorSubject<User>(null);

  private tokenExpTimer: any


  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  signUp(email: string, password: string) {
      return this.http
      .post<AuthResponseData>(SIGN_UP_URL + environment.firebaseAPIkey, {
    });
  }

  signIn(email: string, password: string) {
      return this.http
      .post<AuthResponseData>(SIGN_IN_URL + environment.firebaseAPIkey, {
    });
  }

  signOut(){
    this.currentUser.next(null);
    localStorage.removeItem("userData");
    if (this.tokenExpTimer) clearTimeout(this.tokenExpTimer);
    this.router.navigate(['auth'])
  }

  handleAuth(email: string, userId: string, token: string, expiresIn: number) {
      // Create Expiration Date for Token
      const expDate = new Date(new Date().getTime() + expiresIn * 1000);

      // Create a new user based on the info passed in the form and emit that user
      const formUser = new User(email, userId, token, expDate);
      this.currentUser.next(formUser);

      // Save the new user in localStorage
      localStorage.setItem("userData", JSON.stringify(formUser));

      // Sets a new timer for the expiration token
      this.automaticSignOut(expiresIn * 1000);
  }

  automaticSignIn(){
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));
    if(!userData) return;
    const  { email, id, _token, _tokenExpirationDate } = userData
    const loadedUser = new User(
      email,
      id,
      _token,
      new Date(_tokenExpirationDate)
    )
    if (loadedUser.token) {
      this.currentUser.next(loadedUser)
    }
  }

  automaticSignOut(expDuration: number) {
    console.log("Expiration Duration:", expDuration);

    this.tokenExpTimer = setTimeout(() => {
      this.signOut()
    }, expDuration);
  }



}







// signUp(email: string, password: string) {
//   return this.http
//   .post<AuthResponseData>(SIGN_IN_URL+ AUTH_API_KEY, {
//     email,
//     password,
//     returnSecureToken: true
//   })
//   .pipe(
//     tap(res => {
//       const { email, localId, idToken, expiresIn} = res;

//       this.handleAuth(email, localId, idToken, +expiresIn)
//     })
//   );
// }

// signIn(email: string, password: string) {
//   return this.http.post<AuthResponseData>(
//       SIGN_IN_URL + AUTH_API_KEY,
//       {
//       email,
//       password,
//       returnSecureToken: true,
//       }
//   ) .pipe(
//     tap(res => {
//       const { email, localId, idToken, expiresIn} = res;

//       this.handleAuth(email, localId, idToken, +expiresIn)
//     })
//   );
// }

// Sign Up Key
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

// Sign In Key
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

//WEB API KEY
// AIzaSyA9gsk7xpG0WIT5BwtF__5isqTt3Zho3Lc

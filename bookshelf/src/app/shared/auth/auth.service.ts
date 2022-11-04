import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './user.model';
import { environment } from 'src/environments/environment';

export interface UserData {
  email: string;
  id: string;
  _token: string;
  _tokenExpirationDate: string;
}

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  signUpUrl =
  `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIkey}`;
  loginUrl =
  `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIkey}`;

  userToken: string = '';
  currentUser = new BehaviorSubject<User>(null);
  private tokenExpTimer: any;


  constructor(
                private http: HttpClient,
                private router: Router
              ) { }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.signUpUrl, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, Number(expiresIn));
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.loginUrl, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, Number(expiresIn));
        })
      );
  }

  signOut(){
      this.currentUser.next(null);

      localStorage.removeItem(environment.userDataLocalStorage);
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
        localStorage.setItem(environment.userDataLocalStorage, JSON.stringify(formUser));

        // Sets a new timer for the expiration token
        this.automaticSignOut(expiresIn * 1000);
  }

  automaticSignIn() {
      const userData: UserData = JSON.parse(localStorage.getItem
        (environment.userDataLocalStorage));

      //BAILOUT
      if (!userData) return;

      const { email, id, _token, _tokenExpirationDate } = userData;
      const loadedUser = new User(
        email,
        id,
        _token,
        new Date(_tokenExpirationDate)
      );

      if (loadedUser.token) {
        // may be no subs to current subs
        console.log("emmitting current user")
        this.currentUser.next(loadedUser);
      }
  }

  automaticSignOut(expDuration: number) {
    console.log("Expiration Duration: ", expDuration);
    this.tokenExpTimer = setTimeout(this.signOut, expDuration)
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

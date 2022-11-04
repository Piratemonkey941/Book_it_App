import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  errMsg: string = '';
  authObserve: Observable<AuthResponseData> = new Observable();


  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }


//   onAuthFormSubmit(formObj: NgForm) {
//     // Validation check
//     if(!formObj.valid) return;

//   // Destructure the form input values
//     const {email, password} = formObj.value

//     // Conditional to see what mode we are in
//     if(this.isLoginMode) {
//       // Sign In Logic
//       this.authObserve = this.authService.signIn(email, password)

//       }else {
//         // Sign Up Logic
//         this.authObserve = this.authService.signUp(email, password)
//     }

//     // Observable logic with error handling
//     this.authObserve.subscribe(
//       (res) => {
//         console.log('Auth Resonse success:', res)
//         if(this.errMsg) this.errMsg = null

//         this.router.navigate(['bookshelf'])
//       },
//       (err) => {
//         console.log('Auth Resonse Failure:', err)
//         this.errMsg = err.message
//       }
//     )
// // Reset the form
//     formObj.reset()
//   }
onAuthFormSubmit(form: NgForm) {
  console.log('Submit login form...');
  console.log(form.value);

  if (!form.valid) return;

  this.errMsg = '';

  const { email, password } = form.value;
  if (this.isLoginMode) {
    this.authObserve = this.auth.signIn(email, password);
  } else {
    this.authObserve = this.auth.signUp(email, password);
  }

  this.authObserve.subscribe({
    next: (res) => {
      console.log('Auth Response Success:', res);
      // manually redirect user to bookshelf page
      this.router.navigate(['bookshelf']);
    },
    error: (err) => {
      console.error('Auth Response Error:', err);
      this.errMsg = err.message;
    },
  });

  form.reset();
}
}




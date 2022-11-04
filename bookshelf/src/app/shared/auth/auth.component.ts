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

  ngOnInit(): void {}

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }


  onAuthFormSubmit(form: NgForm) {

    console.log('Submit login form...');
    console.log(form.value);
    // Validation check
    if (!form.valid) return;

    this.errMsg = '';

  // Destructure the form input values
    const { email, password } = form.value;

    // Conditional to see what mode we are in
    if (this.isLoginMode) {
      // Sign In Logic
      this.authObserve = this.auth.login(email, password);
      } else {
        // Sign Up Logic
        this.authObserve = this.auth.signUp(email, password);
    }

    // Observable logic with error handling
    this.authObserve.subscribe({
      next: (res) => {
        console.log('Auth Resonse success:', res)
      // manually redirect user to bookshelf page
        this.router.navigate(['bookshelf']);
      },
      error: (err) => {
        console.error('Auth Resonse Failure:', err);
        this.errMsg = err.message;
      },
      });
// Reset the form
    form.reset()
  }

}









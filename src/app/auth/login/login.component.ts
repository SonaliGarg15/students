import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { LoginResult } from '../../shared/interfaces/loginResult';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showLoginErrorMessage: string = "show error";
  isLoginError: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    //if user is already logged in, then redirect to onboarding form screen.
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['/onboard/form']);
    }

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    //if login error is shown and validation error is there on fields and then if field changes, remove the login error.
    this.loginForm.valueChanges
      .subscribe(value => {
        this.isLoginError = false;
      });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    let loginResult: LoginResult = this.authService.isLoginSuccessful(this.loginForm.value);
    if (loginResult.isLoginSuccessFul) {
      this.router.navigate(['/onboard/form']);
    }
    else { // if login result is not successful, then show the error message on login screen.
      if (loginResult.passwordIncorrect) {
        this.isLoginError = true;
        this.showLoginErrorMessage = "Password is incorrect.";
        this.loginForm.setErrors({ 'invalid': true });
        return;
      }
      else {
        this.isLoginError = true;
        this.showLoginErrorMessage = "User does not exist. Please try again or register.";
        this.loginForm.setErrors({ 'invalid': true });
        return;
      }
    }
  }

  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }

  redirectToRegister() {
    this.router.navigate(['/auth/register']);
  }
}

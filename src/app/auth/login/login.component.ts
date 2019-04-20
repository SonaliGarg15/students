import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {

    if(this.authService.isUserLoggedIn()){
      this.router.navigate(['/onboard/form']);
    }

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    var isUserLoginSuccessful = this.authService.isLoginSuccessful(this.loginForm.value);
    if (isUserLoginSuccessful) {
      this.router.navigateByUrl('/onboard/form');
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

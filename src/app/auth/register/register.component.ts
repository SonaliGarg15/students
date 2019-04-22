import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { RegistrationResult } from '../../shared/interfaces/registrationResult';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  showRegistrationErrorMessage: string = "";
  isRegistrationError: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    //if registration error is shown and validation error is there on fields and then if field changes, remove the registration error.
    this.registrationForm.valueChanges.subscribe(value => {
      this.isRegistrationError = false;
    });
  }

  register() {
    if (this.registrationForm.invalid) {
      return;
    }
    let registrationResult: RegistrationResult = this.authService.addNewUser(this.registrationForm.value);
    if (registrationResult.isregistrationSuccessFul) {
      this.router.navigate(['/auth/login']);
    }
    else { // if registration is not successful show the error message.
      this.isRegistrationError = true;
      this.showRegistrationErrorMessage = registrationResult.errorMessage;
      this.registrationForm.setErrors({ 'invalid': true });
      return;
    }
  }

  redirectToLogin() {
    this.router.navigate(['/auth/login']);
  }

  get userName() {
    return this.registrationForm.get('userName');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get email() {
    return this.registrationForm.get('email');
  }

}

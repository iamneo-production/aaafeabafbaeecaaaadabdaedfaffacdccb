import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  registrationSuccess = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  passwordsMatch(): boolean {
    const password = this.registrationForm.get('password').value;
    const confirmPassword = this.registrationForm.get('confirmPassword').value;
    return password === confirmPassword;
  }

  onSubmit(): void {
    if (this.registrationForm.valid && this.passwordsMatch()) {
      // Register the user or perform desired actions here
      this.registrationSuccess = true;
    }
  }
}

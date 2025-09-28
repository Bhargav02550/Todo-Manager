import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string, errorType: string = 'required'): boolean {
    const control = this.registerForm.get(field);
    return !!(control && control.touched && control.hasError(errorType));
  }

  register() {
    if (this.registerForm.valid) {
      const { firstName, lastName, email, password } = this.registerForm.value;
      this.authService.register({ firstName, lastName, email, password }).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Registration error:', err);
          alert('Registration failed. Please try again.');
        }
      });
    }
    else {
      this.registerForm.markAllAsTouched();
      alert('Please fill out all required fields.');
    }
  }
}

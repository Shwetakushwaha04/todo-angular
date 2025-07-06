import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  registrationFailed = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password:new FormControl ('', [Validators.required])
    });
  }

  onRegister() {
    if (this.registerForm.invalid) {
    const { email, password } = this.registerForm.value;

    this.auth.register({email, password}).subscribe({
      next:(success: boolean) =>{
        if (success) {
          localStorage.setItem('isRegistered', 'true');
          this.router.navigate(['/login']);
        } else {
      this.registrationFailed = 'Registration failed. Try again.';
        }
      }
    });
   }
  }
}




import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginFailed = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password:new FormControl ('', [Validators.required])
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
    const { email, password } = this.loginForm.value;

    this.auth.login({email, password}).subscribe({
      next: (success: boolean) =>{
         if (success) {
          localStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/home']);
        } else {
          this.loginFailed = 'Login Failed.';
        }
      },
      error:(err) =>{
        this.loginFailed = 'Invalid email or password';
      }
    });
   }
  }
}

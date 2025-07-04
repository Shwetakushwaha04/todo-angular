import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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
      email: ['user@mail.com', [Validators.required, Validators.email]],
      password: ['asdfsdfsdfd', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    //TODO: Auth through auth service
    localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyM0BtYWlsLmNvbSIsIm5hbWUiOiJVc2VyIFRocmVlIiwiZXhwIjoxNzUxNjIwMjQyfQ.dv2VhT6uMYYdTl0dIIBZ_4VDYrPzxNGbn_JDsnojAFw');
    this.auth.initSession();
    this.router.navigate(['/home']);

    // const { email, password } = this.loginForm.value;
    // const success = this.auth.login(email, password);

    // console.log(success)

    // if (success) {
    //   localStorage.setItem('isLoggedIn', 'true');
    //   localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyM0BtYWlsLmNvbSIsIm5hbWUiOiJVc2VyIFRocmVlIiwiZXhwIjoxNzUxNjIwMjQyfQ.dv2VhT6uMYYdTl0dIIBZ_4VDYrPzxNGbn_JDsnojAFw');
    //   this.router.navigate(['/home']);
    // } else {
    //   this.loginFailed = 'Invalid email or password';
    // }
  }
}

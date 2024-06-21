import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  faUserCircle = FaIconComponent;
  private router = inject(Router);
  localhostUrl: string = this.router.url.replace('/login','');



  constructor(private auth: AuthService) { }

  login() {
    if (this.email == '') {
      alert('Please enter email');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }

  signUp() {
    this.router.navigate([this.localhostUrl + '/register']);
  }

  signIn() {
    this.router.navigate([this.localhostUrl + '/login']);
  }
}

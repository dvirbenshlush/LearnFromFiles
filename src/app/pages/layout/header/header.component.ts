import { Component } from '@angular/core';
import {
  CdkMenu,
  CdkMenuItem,
  CdkMenuItemRadio,
  CdkMenuGroup,
  CdkMenuItemCheckbox,
  CdkMenuTrigger,
} from '@angular/cdk/menu';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItemCheckbox,
    CdkMenuGroup,
    CdkMenuItemRadio,
    CdkMenuItem,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  userEmail: string | null | undefined;
  authSubscription: Subscription | undefined;
  username: string | undefined;
  bold = false;
  italic = false;

  sizes = ['Small', 'Normal', 'Large'];
  selectedSize: string | undefined = 'Normal';
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.getCurrentUserEmail().subscribe({
      next: email => {
        this.userEmail = email?.split('@')[0];  
        // console.error(this.userEmail);
      },
      error: err => {
        console.error(err);
      }
    });
  }

  ngOnDestroy(): void {
    // this.authSubscription.unsubscribe();
  }

  logout() {
    console.log('logout')
  }

}

import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  exportAs: 'cdkListboxFormsValidationExample',
  standalone: true,
  imports: [ScrollingModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  private authService = inject(AuthService);
  private router = inject(Router);
  isLoggedIn: boolean = this.authService.isLoggedIn //|| (sessionStorage && sessionStorage?.getItem('isLoggedIn') == 'true');

  states = [
    {name: 'Alabama', capital: 'Montgomery'},
    {name: 'Alaska', capital: 'Juneau'},
    {name: 'Arizona', capital: 'Phoenix'},
    {name: 'Arkansas', capital: 'Little Rock'},
    {name: 'California', capital: 'Sacramento'},
    {name: 'Colorado', capital: 'Denver'},
    {name: 'Connecticut', capital: 'Hartford'},
    {name: 'Delaware', capital: 'Dover'},
    {name: 'Florida', capital: 'Tallahassee'},
    {name: 'Georgia', capital: 'Atlanta'},
    {name: 'Hawaii', capital: 'Honolulu'},
    {name: 'Idaho', capital: 'Boise'},
    {name: 'Illinois', capital: 'Springfield'},
    {name: 'Indiana', capital: 'Indianapolis'},
    {name: 'Iowa', capital: 'Des Moines'},
    {name: 'Kansas', capital: 'Topeka'},
    {name: 'Kentucky', capital: 'Frankfort'},
    {name: 'Louisiana', capital: 'Baton Rouge'},
    {name: 'Maine', capital: 'Augusta'},
    {name: 'Maryland', capital: 'Annapolis'},
    {name: 'Massachusetts', capital: 'Boston'},
    {name: 'Michigan', capital: 'Lansing'},
    {name: 'Minnesota', capital: 'St. Paul'},
    {name: 'Mississippi', capital: 'Jackson'},
    {name: 'Missouri', capital: 'Jefferson City'},
    {name: 'Montana', capital: 'Helena'},
    {name: 'Nebraska', capital: 'Lincoln'},
    {name: 'Nevada', capital: 'Carson City'},
    {name: 'New Hampshire', capital: 'Concord'},
    {name: 'New Jersey', capital: 'Trenton'},
    {name: 'New Mexico', capital: 'Santa Fe'},
    {name: 'New York', capital: 'Albany'},
    {name: 'North Carolina', capital: 'Raleigh'},
    {name: 'North Dakota', capital: 'Bismarck'},
    {name: 'Ohio', capital: 'Columbus'},
    {name: 'Oklahoma', capital: 'Oklahoma City'},
    {name: 'Oregon', capital: 'Salem'},
    {name: 'Pennsylvania', capital: 'Harrisburg'},
    {name: 'Rhode Island', capital: 'Providence'},
    {name: 'South Carolina', capital: 'Columbia'},
    {name: 'South Dakota', capital: 'Pierre'},
    {name: 'Tennessee', capital: 'Nashville'},
    {name: 'Texas', capital: 'Austin'},
    {name: 'Utah', capital: 'Salt Lake City'},
    {name: 'Vermont', capital: 'Montpelier'},
    {name: 'Virginia', capital: 'Richmond'},
    {name: 'Washington', capital: 'Olympia'},
    {name: 'West Virginia', capital: 'Charleston'},
    {name: 'Wisconsin', capital: 'Madison'},
    {name: 'Wyoming', capital: 'Cheyenne'},
  ];
  
  localhostUrl: string = this.router.url.replace('/login','');

  ngOnInit(): void {
    const sessionStorageLoggedIn = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('isLoggedIn') : null;
    if (this.isLoggedIn || sessionStorageLoggedIn) {
      console.log('can activate true');
      this.isLoggedIn = true;
    }
  }

  signOut() {
    this.authService.logout();
  }

  signIn() {
    this.router.navigate([this.localhostUrl + '/login']);
  }

  signUp() {
    this.router.navigate([this.localhostUrl + '/register']);
  }
}

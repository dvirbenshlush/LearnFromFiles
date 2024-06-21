import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, DecimalPipe],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss'
})
export class HomeCardComponent {
  @Input() data: any;

}

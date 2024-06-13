import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {
  @Input() data: any;

}

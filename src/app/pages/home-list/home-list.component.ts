import { Component, Input, OnInit } from '@angular/core';
import { HomeCardComponent } from "../home-card/home-card.component";
import { FindYourHouseService } from '../../services/findYourHouse.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { message, Yad2Response } from '../../models/Yad2Response.model'; 
@Component({
    selector: 'app-property-list',
    standalone: true,
    templateUrl: './home-list.component.html',
    styleUrl: './home-list.component.scss',
    imports: [HomeCardComponent]
})
export class HomeListComponent implements OnInit {


  properties: message[] = []; // Update the type of 'properties' to match the imported module or type declarations
  homeDetails: message | undefined;

  constructor(private findYourHouseService: FindYourHouseService, private router: Router) {

  }

  ngOnInit() {
    this.findYourHouseService.saveData().subscribe(response => {
      this.findYourHouseService.setHomeListDetails(response)
      this.properties = response.message;
      console.log(this.properties)
      
    })
  }

  redirectToHomeDetails(index: number) {
      this.homeDetails = this.properties[index];
      console.log(this.homeDetails);
      this.findYourHouseService.setHomeDetails(this.homeDetails);
      this.router.navigate([this.router.url, this.homeDetails.OrderID]);
  }    

}




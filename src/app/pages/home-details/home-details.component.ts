import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";
import { Loader } from "@googlemaps/js-api-loader"
import { map } from 'rxjs';
import { HousesArray } from '../../models/Yad2Response.model';
import { FindYourHouseService } from '../../services/findYourHouse.service';

@Component({
  selector: 'app-home-details',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.scss'
})
export class HomeDetailsComponent implements AfterViewInit, OnInit{
  
    loader = new Loader({
      apiKey: "AIzaSyDWOxwaGmjyIC-X0H6yEV2YKRqNP6lvqKI",
      version: "weekly",
      // ...additionalOptions,
  });

  homeDetails!: HousesArray;
  options!: google.maps.Map;

  constructor(private findYourHouseService: FindYourHouseService) { 
    
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.findYourHouseService.getHomeDetails().subscribe(homeDetails => {
      this.homeDetails = homeDetails;
      console.log(this.homeDetails)
      this.loadMap();
    })
    
  }

  loadMap() {
    this.loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      this.options = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: { lat:  this.homeDetails.geo_location.lat, lng: this.homeDetails.geo_location.lon },
          zoom: 8,
      });
  });
  }

}

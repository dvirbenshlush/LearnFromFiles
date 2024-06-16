import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MatDialogActions ,MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home-details-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './home-details-dialog.component.html',
  styleUrl: './home-details-dialog.component.scss'
})
export class HomeDetailsDialogComponent implements AfterViewInit, OnInit{

  loader = new Loader({
      apiKey: "AIzaSyDWOxwaGmjyIC-X0H6yEV2YKRqNP6lvqKI",
      version: "weekly",
      // ...additionalOptions,
  });

  homeDetails!: any;
  options!: google.maps.Map;
  houseImagesArray: any;

  constructor(public dialogRef: MatDialogRef<HomeDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    
  }

  ngOnInit(): void {
  
    this.houseImagesArray = this.data.images;  
    console.log(this.houseImagesArray); 
  }

  ngAfterViewInit(): void {

      this.loadMap();
  }

  loadMap() {
    this.loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      this.options = new google.maps.Map(document.getElementById("map") as HTMLElement, {
          center: { lat:  this.data.geo_location.lat, lng: this.data.geo_location.lon },
          zoom: 8,
      });
    });
  }

  onClose() {
    console.log('Dialog closed');
  }
      
}

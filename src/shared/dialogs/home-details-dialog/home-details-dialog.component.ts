import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { MatDialogActions ,MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatIconModule }  from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home-details-dialog',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, SlickCarouselModule, MatIconModule, CommonModule],
  templateUrl: './home-details-dialog.component.html',
  styleUrl: './home-details-dialog.component.scss'
})
export class HomeDetailsDialogComponent implements AfterViewInit, OnInit{
  [key: string]: any;

  loader = new Loader({
      apiKey: environment.GOOGLE_MAPS_API_KEY,
      version: "weekly",
      // ...additionalOptions,
  });
  marker: any;
  homeDetails!: any;
  options!: google.maps.Map;
  houseImagesArray: any;
  slideConfig = {
    sildesToShow: 1,
    sildesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
      "responsive": [{
        "breakpoint": 992,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "infinite": true,
          "arrows": true,
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "infinite": true,
          "arrows": true,
        }
      }
    ]   
  }
  showMore: boolean = this.data.Info.length <= 100;


  constructor(public dialogRef: MatDialogRef<HomeDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    
  }

  ngOnInit(): void {
  
    this.houseImagesArray = this.data.images; 
    this.callFunctionByName('test'); 
  }



  callFunctionByName(functionName: string) {
    if (this[functionName] && typeof this[functionName] === 'function') {
      this[functionName]();
    } else {
      console.log(`Function ${functionName} does not exist`);
    }
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

    const marker = new google.maps.Marker({
      position: { lat:  this.data.geo_location.lat, lng: this.data.geo_location.lon },
      map: this.options,
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  test() {
    console.log('test')
  }
      
}

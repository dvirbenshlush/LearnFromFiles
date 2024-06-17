import { Component, Input, OnInit } from '@angular/core';
import { HomeCardComponent } from "../home-card/home-card.component";
import { FindYourHouseService } from '../../services/findYourHouse.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { message, Yad2Response } from '../../models/Yad2Response.model'; 
import { MatDialog } from '@angular/material/dialog'; // Import the 'MatDialog' class
import { HomeDetailsDialogComponent } from '../../../shared/dialogs/home-details-dialog/home-details-dialog.component';

@Component({
    selector: 'app-property-list',
    standalone: true,
    templateUrl: './home-list.component.html',
    styleUrl: './home-list.component.scss',
    imports: [HomeCardComponent]
})
export class HomeListComponent implements OnInit {
  
  currentPage: number = 0;
  countOfPages: number = 0;
  properties: message[] = []; // Update the type of 'properties' to match the imported module or type declarations
  homeDetails: message | undefined;
  pageArray: number[] | undefined;
  constructor(public dialog: MatDialog, private findYourHouseService: FindYourHouseService, private router: Router) {

  }

  ngOnInit() {
    this.findYourHouseService.saveData().subscribe(response => {
      this.findYourHouseService.setHomeListDetails(response)
      this.properties = response.message;
      this.countOfPages = response.countOfPages;
      this.pageArray = Array.from({length: this.countOfPages}, (_, i) => i + 1);
      
    })
  }

  redirectToHomeDetails(index: number) {
      this.homeDetails = this.properties[index];
      console.log(this.homeDetails);
      this.findYourHouseService.setHomeDetails(this.homeDetails);
      this.router.navigate([this.router.url, this.homeDetails.OrderID]);
  }    

  openDialog(index: number): void {
    this.homeDetails = this.properties[index];
    this.findYourHouseService.setHomeDetails(this.homeDetails);

    const dialogRef = this.dialog.open(HomeDetailsDialogComponent, {
      width: '900px',
      height: '500px',
      position: {
      top: '10%',
      left: '30%',
      // transform: 'translate(-50%, -50%)'
      },
      data: this.homeDetails // Pass the data to the dialog component
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result: ', result);
    });
  }


  nextPage() {
    if(this.currentPage < this.countOfPages) {
      this.currentPage++;
      this.getHomeDetails(this.currentPage);
    }
  }
  
  goToPage(index: any) {
    if(index <= this.countOfPages) {
      this.currentPage = index;
      this.getHomeDetails(this.currentPage);
    }  
  }
  
  previousPage() {
    if(this.currentPage > 0) {
        this.currentPage--;
        this.getHomeDetails(this.currentPage);
    }
  }

  getHomeDetails(pageIndex: number) {
    this.findYourHouseService.saveData(pageIndex).subscribe(response => {
      this.findYourHouseService.setHomeListDetails(response)
      this.properties = response.message;
      console.log(this.properties)
      
    })  
  }

}




import { Component, Input, OnInit } from '@angular/core';
import { HomeCardComponent } from "../home-card/home-card.component";
import { FindYourHouseService } from '../../services/findYourHouse.service';
import { response } from 'express';
import { Router } from '@angular/router';
import { HousesArray, Yad2Response } from '../../models/Yad2Response.model'; 
import { MatDialog } from '@angular/material/dialog'; // Import the 'MatDialog' class
import { HomeDetailsDialogComponent } from '../../../shared/dialogs/home-details-dialog/home-details-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
    selector: 'app-property-list',
    standalone: true,
    templateUrl: './home-list.component.html',
    styleUrl: './home-list.component.scss',
    imports: [HomeCardComponent, MatPaginatorModule, NgxPaginationModule]
})
export class HomeListComponent implements OnInit {
  
  currentPage: number = 1;
  countOfPages: number = 0;
  housesArray: HousesArray[] = []; // Update the type of 'housesArray' to match the imported module or type declarations
  homeDetails: HousesArray | undefined;
  pageArray: number[] | undefined;
  pageSize: number = 10;
  totalItems!: number;

  constructor(public dialog: MatDialog, private findYourHouseService: FindYourHouseService, private router: Router) {

  }

  ngOnInit() {
    this.findYourHouseService.saveData().subscribe(response => {
      this.findYourHouseService.setHomeListDetails(response)
      this.housesArray = response.housesArray;
      this.countOfPages = response.countOfPages;
      this.pageArray = Array.from({length: this.pageSize}, (_, i) => i + 1);
      
    })
  }

  redirectToHomeDetails(index: number) {
      this.homeDetails = this.housesArray[index];
      console.log(this.homeDetails);
      this.findYourHouseService.setHomeDetails(this.homeDetails);
      this.router.navigate([this.router.url, this.homeDetails.OrderID]);
  }    

  openDialog(index: number): void {
    this.homeDetails = this.housesArray[index];
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
      if(this.currentPage % this.pageSize !== 0) {
        if(this.currentPage < this.countOfPages) {
          this.currentPage++;
          this.getHomeDetails(this.currentPage);
        }
      }
      else {
        this.nextChunck();
      }
    }
  }

  nextChunck() {
    this.pageArray = this.pageArray?.map((pageIndex) => {
      return pageIndex + this.pageSize;
    });
  }
  
  goToPage(index: any) {
    if(index + 1 <= this.countOfPages) {
      this.currentPage = index + 1;
      this.getHomeDetails(this.currentPage);
    }  
  }
  
  previousPage() {

    if(this.currentPage > 1) {
      if(this.currentPage % this.pageSize !== 0) {
        this.currentPage--;
        this.getHomeDetails(this.currentPage);
      }
      else {
        this.previousChunck();
      }
    }

  }

  previousChunck() {

    this.pageArray = this.pageArray?.map((pageIndex) => {
      return pageIndex - this.pageSize;
    });
  }

  getHomeDetails(pageIndex: number) {
    this.findYourHouseService.saveData(pageIndex).subscribe(response => {
      this.findYourHouseService.setHomeListDetails(response);
      this.housesArray = response.housesArray;
      this.totalItems = response.countOfPages;
      console.log(this.housesArray)
      this.countOfPages = (this.totalItems) % this.pageSize == 0 ? (this.totalItems) / this.pageSize : Math.floor((this.totalItems) / this.pageSize + 1);

    })  
  }

}




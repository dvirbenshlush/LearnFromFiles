import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { message, Yad2Response } from '../models/Yad2Response.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FindYourHouseService {

    private apiUrl = 'http://localhost:3000'; // Replace with your API URL
    private homeDetailsSubject = new Subject<message>();
    private homesListSubject = new Subject<Yad2Response>();

    constructor(private http: HttpClient) { }
  
    saveData(): Observable<Yad2Response> {
      return this.http.get<Yad2Response>(`${this.apiUrl}/search`);
    }

    getHomeDetails(): Observable<message> {
      return this.homeDetailsSubject.asObservable();
    }

    setHomeDetails(message: message): void {
      this.homeDetailsSubject.next(message);
    }

    setHomeListDetails(yad2Response: Yad2Response): void {
      this.homesListSubject.next(yad2Response);
    }

    getHomeListDetails(): Observable<Yad2Response> {
      return this.homesListSubject.asObservable();
    }
}
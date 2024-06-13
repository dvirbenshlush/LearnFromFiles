import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FindYourHouseService {

    private apiUrl = 'http://localhost:3000'; // Replace with your API URL

    constructor(private http: HttpClient) { }
  
    saveData(): Observable<any> {
      return this.http.get(`${this.apiUrl}/search`);
    }
}
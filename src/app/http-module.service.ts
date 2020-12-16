import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpModuleService {
  private readonly URL = 'https://localhost:44351/api/email';

  constructor(private http: HttpClient) {  }

   resolveItems(): Observable<any> {
    console.log('Request is received!');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    const headers =  {
      headers: new  HttpHeaders({
        'Content-Type': 'application/json'})
    };

    return this.http.get(this.URL+ '?id=1', headers)
  }
  emailSent(data: any): Observable<any> {
    console.log('Request is sent!');
    // Using the POST method
    const headers =  {
      headers: new  HttpHeaders({
        'Content-Type': 'application/json'})
    };
    return this.http.post(this.URL,data,
    headers)
  }

}

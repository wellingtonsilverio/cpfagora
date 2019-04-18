import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // API_URL = 'https://cpfagora-api.herokuapp.com';
  API_URL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getCPFOrCNPJ(email: string, cpfcnpj: string): Observable<any> {
    return this.http.get(`${this.API_URL}/free/${email}/${cpfcnpj}`);
  }
}

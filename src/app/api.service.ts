import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = this.router.url + '/api/testdata';
 
  constructor(private http:HttpClient, private router: Router) { 
  };
 getAllData(): any {
  return this.http.get(this.baseURL, {responseType: 'json'}); 
  }
}

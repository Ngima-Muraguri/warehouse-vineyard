import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

getProduct () {
  let url = 'http://127.0.0.1:8000/api/product';
  
  return this.http.get(url);
}


getPrice (){
  let url = 'http://127.0.0.1:8000/api/price'
  return this.http.get(url);
}

  
  }




import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<any>('profile link').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}

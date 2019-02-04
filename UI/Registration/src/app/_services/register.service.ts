import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = 'http://localhost:5000/api/Registration/';
  constructor(private http: HttpClient) {}

  registerCandidate(model: any) {
    return this.http.post(this.baseUrl + 'register', model).pipe(
      map((response: any) => {
        const user = response;
      })
    );
  }
}

import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
 import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { appConfig } from '../core/app.config';

declare const $: any;
@Injectable()
export class commonService {
  public headers: Headers;
   constructor(
    @Inject(Http) public http: Http,
    public router: Router
  ) {

    // this.headers = new Headers({
    //   Authorization: "Bearer " + authservice.token
    // });
    // this.headers.append('Content-Type', 'application/json'); // ******
  }
  // Common API for GET

  fn_Get(url: string): Observable<any> {
    return this.http
      .get(appConfig.apiUrl + url, { headers: this.headers })
      .map((res: Response) => res.json())
      .catch((error: any) => {
        if (error.status === 401) {
        // this.fn_log(error);
        return Observable.throw(error.statusText); }
      });
  }

  fn_GetWithData(url: string, data: any): Observable<any> {
    // JSON.stringify(data)
    return this.http
      .get(appConfig.apiUrl + url + data, { headers: this.headers })
      .map((res: Response) => res.json())
      .catch((error: any) => {
        // solution check for status code 401 before calling fn_log()
        if (error.status === 401) {
        // this.fn_log(error);
        return Observable.throw(error.statusText); }
      });
  }

  // Common API for POST

  fn_PostWithData(d: any, url: string) {
    //  let headers1 = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .post(appConfig.apiUrl + url, JSON.stringify(d), {
        headers: this.headers
      })
      .map((res: Response) => res.json())
      .catch((error: any) => {
        if (error.status === 401) {
        // this.fn_log(error);
        return Observable.throw(error.statusText); }
      });
  }
  fn_Post(url: string) {
    // let headers1 = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .post(appConfig.apiUrl + url, { headers: this.headers })
      .map((res: Response) => res.json())
      .catch((error: any) => {
        if (error.status === 401) {
        // this.fn_log(error);
        return Observable.throw(error.statusText); }
      });
  }

}

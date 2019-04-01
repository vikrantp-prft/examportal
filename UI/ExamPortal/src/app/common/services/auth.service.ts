import { Router } from "@angular/router";
import { Injectable, Inject } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { appConfig } from "../core/app.config";
import { Observable } from "rxjs";

@Injectable()
export class CustomAuthService {
  public headers: Headers;
  public token: string;
  public isLoggedIn: boolean = false;
  constructor(@Inject(Http) public http: Http) {}

  login(data: any, url: string) {
    this.headers = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post(appConfig.identityUrl + url, JSON.stringify(data), {
        headers: this.headers
      })
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => {
        if (error.status === 401) {
          console.log("error : ", error);
          return Observable.throw(error.statusText);
        }
        if (error.status === 400) {
          console.log("error : ", error);
          return Observable.of(error);
        }
      });
  }
  logout() {
    localStorage.removeItem("userDetails");
  }
}

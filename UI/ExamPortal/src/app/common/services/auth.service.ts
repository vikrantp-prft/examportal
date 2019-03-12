import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { appConfig } from '../core/app.config';
import { Observable } from 'rxjs';

@Injectable()
export class CustomAuthService {
    public headers: Headers;
    public token: string;
    public isLoggedIn: boolean = false;

    constructor(@Inject(Http) public http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('loginUserdetails'));
    }

    login(data: any, url: string) {
        this.headers = new Headers({ "Content-Type": "application/json" });
        return this.http
            .post(appConfig.identityUrl + url, JSON.stringify(data), {
                headers: this.headers
            })
            .map((res: Response) => {
                let data = res.json();
                let tokenString = data.data;
                if (tokenString != null && tokenString != "") {
                    // set token property
                    this.token = tokenString;
                    this.isLoggedIn = true;
                    localStorage.setItem("UserDetails", JSON.stringify({ token: this.token, isLoggedIn: this.isLoggedIn }))
                    return true;
                }
                else {
                    return false;
                }
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
        localStorage.removeItem('phCanAccessModule');
        localStorage.clear();
        location.reload();
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('UserDetails');
    }

}
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { routerTransition } from "../router.animations";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { commonService } from "../common/services/common.service";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomAuthService } from "../common/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [routerTransition()],
  providers: [commonService]
})
export class LoginComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private ngxService: NgxUiLoaderService,
    private CommonService: commonService,
    private toastr: ToastrService,
    public router: Router,
    public authservice: CustomAuthService
  ) {
    this.translate.addLangs([
      "en",
      "fr",
      "ur",
      "es",
      "it",
      "fa",
      "de",
      "zh-CHS"
    ]);
    this.translate.setDefaultLang("en");
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(
      browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : "en"
    );
  }

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);
  }

  onLoggedin(response) {
    //this.fn_requestLogin();
    localStorage.setItem("isLoggedin", "true");
    localStorage.setItem("identityToken", response.data);
  }

  fn_requestLogin(data) {
    if (!this.loginForm.valid) {
      this.loginForm.setErrors({
        Validators
      });
    }
    //const url = 'identity-api/Identity/LoginAdministrator';
    const url = "api/Identity/LoginAdministrator";

    const loginModel = {
      username: data.value.username,
      password: data.value.password
    };

    this.authservice.login(loginModel, url).subscribe(
      (result: any) => {
        const rs = result;
        if (this.authservice.isLoggedIn == true) {
          this.onLoggedin(rs);
          if (loginModel.username == "vikrant.punwatkar@perficient.com") {
            this.router.navigate(["/dashboard"]);
          } else {
            this.router.navigate(["/exams/5c53e96bad3abd0eec04b09a"]);
          }
        } else {
          var responseObj = JSON.parse(rs._body);
          console.log(responseObj.message);
          this.toastr.error(responseObj.message);
        }
      }

    );
  }
}

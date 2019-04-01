import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomAuthService } from "src/app/common/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public userName: string;
  public isAdmin: boolean;
  public isEmployee: boolean;

  constructor(public router: Router, public authservice: CustomAuthService) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem("userDetails"));

    if (user != null) {
      this.userName = user.userName;
      this.isAdmin = user.userRole.includes("ADMINISTRATOR");
      this.isEmployee = user.userRole.includes("EMPLOYEE");

      if (!this.isEmployee) {
        localStorage.removeItem("userDetails");
        this.router.navigate(["/"]);
      }
    } else {
      localStorage.removeItem("userDetails");
      this.router.navigate(["/"]);
    }
  }

  onLogout() {
    this.authservice.logout();
  }
}

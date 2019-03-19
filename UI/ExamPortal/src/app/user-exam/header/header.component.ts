import { Component, OnInit } from "@angular/core";
import { CustomAuthService } from "src/app/common/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public userName: string;
  public isAdmin: boolean;
  constructor(public authservice: CustomAuthService) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    this.userName = user.userName;
    this.isAdmin = user.userRole.includes("ADMINISTRATOR");
  }

  onLogout() {
    this.authservice.logout();
  }
}

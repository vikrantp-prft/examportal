import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { routerTransition } from "../../router.animations";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  public isAdmin: boolean;
  public isEmployee: boolean;

  constructor(public router: Router, private ngxService: NgxUiLoaderService) {
    this.sliders.push(
      {
        imagePath: "assets/images/slider1.jpg",
        label: "First slide label",
        text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
      },
      {
        imagePath: "assets/images/slider2.jpg",
        label: "Second slide label",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        imagePath: "assets/images/slider3.jpg",
        label: "Third slide label",
        text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      }
    );

    this.alerts.push(
      {
        id: 1,
        type: "success",
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      },
      {
        id: 2,
        type: "warning",
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
      }
    );
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    if (user != null) {
      this.isAdmin = user.userRole.includes("ADMINISTRATOR");
      this.isEmployee = user.userRole.includes("EMPLOYEE");

      if (!this.isAdmin) {
        if (this.isEmployee) {
          this.router.navigate(["/exams"]);
        } else {
          localStorage.removeItem("userDetails");
          this.router.navigate(["/"]);
        }
      }
    } else {
      localStorage.removeItem("userDetails");
      this.router.navigate(["/"]);
    }
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}

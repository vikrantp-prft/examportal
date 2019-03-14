import { Component, OnInit } from '@angular/core';
import { CustomAuthService } from 'src/app/common/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(public authservice: CustomAuthService) { }

    ngOnInit(): void { }

    onLogout(){
        this.authservice.logout();
    }
}

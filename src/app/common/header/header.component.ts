import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName : string;
  isLoggedIn : boolean = false;;

  constructor(private authService: AuthService, private router: Router) { 
    authService.getLoggedInName.subscribe(name => this.changeName(name));
    authService.isUserLogged.subscribe(loggedIn => this.showLogoutButton(loggedIn));
  }

  ngOnInit() {
    this.userName = this.authService.getUserName();
  }

  changeName(name){
    this.userName = name;
  }

  showLogoutButton(isLoggedIn){
    this.isLoggedIn = isLoggedIn;
  }

  logOutUser(){
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
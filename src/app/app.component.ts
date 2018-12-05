import { Component } from '@angular/core';


import { Users } from 'Users';
import { UsersService } from './users.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springboot-project-thelawproject-client';

  currentUser: Users;

  currentuser: boolean;
  cuser:boolean;


  constructor(private usersService: UsersService, private router: Router) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
   // this.usersService.logout();

   // this.router.navigate(['/homepage']);
    
  }

  ngOnInit() {

    console.log("app component");
    console.log("current user in app component" + this.currentUser);

    this.cuser = this.cUser();
   // location.reload();
    console.log("app component");
    console.log("cuser in app component" + this.cuser);


  }


  loggedin() {

    this.usersService.isLoggedIn
  }


  cUser() {

    if (this.currentUser) {

             
       return this.currentuser = true; 
       
    } else {
    
            
      return this.currentuser = false;
      
    }
 }


 whichCUser() {

  if (this.cuser) {
    location.reload();
  } else {
    location.reload();
  }

 }
  

}

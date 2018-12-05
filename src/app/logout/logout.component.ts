import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UsersService } from '../../app/users.service';

import { LoginResult } from 'LoginResult';

@Component({
  selector: 'app-logout',
  // template: `
  //   <p>
  //     logout works!
  //   </p>
  // `,
  templateUrl: './logout.component.html',
  styles: []
})
export class LogoutComponent implements OnInit {

  success: boolean;

  public loginresult: LoginResult[] = [];

  constructor(private router: Router, private usersService: UsersService) {

   // this.usersService.logout();
   }

  ngOnInit() {

   // this.logout(succes);
  }


  logout(success:boolean):void {

    // success = true;

    console.log("logout component" + success);

    // this.usersService.logout({ success } as LoginResult)
    // .subscribe(loginResult => {

    //    this.loginresult.push(loginResult);

    // });


  }




}

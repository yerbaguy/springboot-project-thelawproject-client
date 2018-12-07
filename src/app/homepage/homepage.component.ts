import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UsersService } from '../../app/users.service';

import { LoginResult } from 'LoginResult';


@Component({
  selector: 'app-homepage',
  // template: `
  //   <p>
  //     homepage works!
  //   </p>
  // `,
  templateUrl: './home.component.html',
  styles: []
})
export class HomepageComponent implements OnInit {


 // private url = 'http://localhost:4200/homepage';


 success: boolean;

  public loginresult: LoginResult[] = [];


  constructor(private router: Router, private usersService: UsersService) { 


   // router.navigate(['/homepage']);
   // router.navigateByUrl('/homepage');
  }

  ngOnInit() {
  }


  onLogout(success:boolean) {

   // this.usersService.logout();

    success = true;

   console.log("logout component" + success);

   this.usersService.logout({ success } as LoginResult)
   .subscribe(loginResult => {

      this.loginresult.push(loginResult);

   });

   // this.router.navigate(['/']);
   // this.router.onSameUrlNavigation;

   //this.router.navigate(['/']);

  }
}

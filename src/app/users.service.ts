import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from 'Users';
import { LoginResult } from 'LoginResult';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


//import { LoginComponent } from '../../login/login.component';

import { Router } from '@angular/router';


interface myData {

  success: boolean,
  message: string
}


interface data {

  result: boolean
 
}


const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json'})

};





@Injectable({
  providedIn: 'root'
})
export class UsersService {

  currentUser: Users;

 // private loggedInStatus = false

 // public loggedInStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public isLoggedInSource = new BehaviorSubject<boolean>(false); 

    public _isLoggedIn: Observable<boolean> = this.isLoggedInSource.asObservable();



  lresult:boolean;

  private userUrl = "http://localhost:8080/api/create";

  loginResult:string = "";

  private userLoginUrl = "http://localhost:8080/api/login-user";
  //private userLoginUrl = "http://localhost:8080/api/loginuserResult";

 
  private loginUserResult = "http://localhost:8080/api/login-user-result";

  private logoutResult = "http://localhost:8080/api/logout-result";


  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

       console.error(error, 'Operation: ${operation}');

       return of(result as T);
    }

  }




  constructor(private http: HttpClient, private router: Router) { }




 // setLoggedIn(value: boolean) {
   set isLoggedIn(value: boolean) {

    this.isLoggedInSource.next(value);


   // this.loggedInStatus = value  // it was
   // localStorage.setItem('loggedIn', 'true')
  }


  get isLoggedIn() {


    return this.isLoggedIn;
     
//    return this.loggedInStatus
//    return this.loggedInStatus.asObservable();

   //   return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }


  logoutt() {

//    this.isLoggedIn(false);

   this.isLoggedIn = false;
   this.router.navigate(['/']);

  }


  login() {

    this.isLoggedIn = true;
  }

  addUser(user: Users): Observable<Users> {

        

    return this.http.post<Users>(this.userUrl, user, httpOptions ).pipe(

      tap((user: Users) => console.log('Added user with id ${user.id}')),
      catchError(this.handleError<Users>('_addUser'))

    );


  }


  loginUser(user: Users): Observable<Users> {

    return this.http.post<Users>(this.userLoginUrl, user, httpOptions ).pipe(

      tap((user: Users) => console.log('Added user with id ${user.id}')),
      catchError(this.handleError<Users>('_loginUser_'))

    );


 }

  result():any {


    return this.http.get(this.loginUserResult);

  }

  // logout():void {

  //    this.http.get(this.logoutResult);
   //  return this.http.get(this.logoutResult);
//  }


  logout(loginResult: LoginResult): Observable<LoginResult> {

        console.log("users service logout");

     //   return this.http.post<LoginResult>(this.logoutResult, loginResult, httpOptions ).pipe(

     return this.http.post<LoginResult>(this.logoutResult, loginResult, httpOptions ).pipe(

      tap((loginResult: LoginResult) => console.log('Added user with id ${user.id}')),
      catchError(this.handleError<LoginResult>('_logout_')) 

    );


  }


}

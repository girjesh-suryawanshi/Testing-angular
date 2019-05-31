import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseUrl:String ='http://localhost:8080'

  constructor(private http:HttpClient) { }

  logInVerification(user:any):Observable<any>{
    console.log("Inside Service");
    console.log(user);
    return this.http.post<User>(this.baseUrl+'/user/login',user);
  }

  

}

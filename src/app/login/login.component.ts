import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message:String ='';
  user:any={}

  constructor(private logInService:LoginServiceService,private router: Router) { }

  ngOnInit() {
    
  }
  hello(){
    console.log(this.user);
  }

  onClickLogin(){

    this.router.navigate(['/registration']);
    // console.log("Inside login")
    // this.logInService.logInVerification(this.user).subscribe(success=>{

    // },error=>{

    // })
  }

}

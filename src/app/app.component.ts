import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message:String ='';
  user:any;
  title = 'mytest';
  onInit(){
   this.user={};
  }
 
  
}

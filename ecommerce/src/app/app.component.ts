import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  constructor(){
   
  }
  menuIcon:boolean = false;
  menuclick(){
    this.menuIcon =! this.menuIcon;
    setTimeout(() => {
      this.menuIcon = false;
    }, 1500);
     
  }
}

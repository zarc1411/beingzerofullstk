import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
x:string = "RANDOM DATA";
  constructor() { }

  ngOnInit() {
    this.x = this.x + "  new";
  }
  fnclick(){
    this.x+=" new";
  }
}

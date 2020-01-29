import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styles: []
})
export class EndScreenComponent implements OnInit {

  EndMessage = "";

  winMessage = "<h4 class='text-primary'>You Survived The Dungeon<h4>";
  loseMessage = "<h4 class='text-danger'>You Died<h4>";
  tieMessage = "<h4 class='text-warning'>You defeated the Boss but at what cost?<h4>";

  temp = [this.winMessage,this.loseMessage,this.tieMessage];

  constructor() { }

  ngOnInit() {
    
    this.EndMessage = this.temp[Math.floor(Math.random()*3)];
  }
}
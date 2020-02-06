import { Component, OnInit } from '@angular/core';
import { PlayerArrayService } from '../player-array.service';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styles: []
})
export class EndScreenComponent implements OnInit {

  constructor(private playerService: PlayerArrayService) { }

  playerHealth = {};

  EndMessage = "";

  //playerName //= "Brave Adventurer";
  playerName = this.playerService.getName();

  flawlessMessage = "<h4 class='text-primary'>Flawless Victory, "+this.playerName+". You Won without taking any damage<h4>";
  winMessage = "<h4 class='text-primary'>You Survived The Dungeon<h4>";
  loseMessage = "<h4 class='text-danger'>You Died<h4>";
  tieMessage = "<h4 class='text-warning'>You defeated the Boss but at what cost?<h4>";

 

  temp = [this.flawlessMessage, this.winMessage, this.loseMessage, this.tieMessage];

  ngOnInit() {
    this.playerName = this.playerService.getName();
    this.playerHealth = this.playerService.getHealth();


    if(this.playerHealth["maxHP"] === this.playerHealth["curHP"]){
      this.EndMessage = this.flawlessMessage;
    } else if (this.playerHealth["curHP"] > 0) {
      this.EndMessage = this.winMessage;
    } else if (this.playerHealth["bossHP"] === 0) {
      this.EndMessage = this.tieMessage;
    } else {
      this.EndMessage = this.loseMessage;
    }
  }
}
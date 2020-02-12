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
  
  FinalFight;

  //playerName //= "Brave Adventurer";
  playerName = this.playerService.getName();
  audioPlayer = new Audio();
  finalScore

  flawlessMessage = "<h4 class='text-primary'>Flawless Victory, "+this.playerName+". You Won without taking any damage</h4>";
  winMessage = "<h4 class='text-primary'>Congratulations, "+this.playerName+".  You survived The Dungeon</h4>";
  loseMessage = "<h4 class='text-danger'>You Died</h4>";
  tieMessage = "<h4 class='text-warning'>You defeated the Boss but at what cost?</h4>";
  FinalScore = "<h4 class='text-success'>Your Final Score Was ";

 

  temp = [this.flawlessMessage, this.winMessage, this.loseMessage, this.tieMessage];

  ngOnInit() {
    this.playerName = this.playerService.getName();
    this.playerHealth = this.playerService.getHealth();
    this.FinalFight = "<h4 class='text-primary'> "+ this.playerService.getFightResult() +"</h4>"
    //this.playerService.getFightResult();


    this.finalScore = this.playerService.getScore() + this.playerHealth["curHP"];

    this.FinalScore = this.FinalScore + this.finalScore +'</h4>';


    if(this.playerHealth["maxHP"] === this.playerHealth["curHP"]){
      this.EndMessage = this.flawlessMessage;
      this.youWin();
    } else if (this.playerHealth["curHP"] > 0) {
      this.EndMessage = this.winMessage;
      this.youWin();
    } else if (this.playerHealth["bossHP"] === 0) {
      this.EndMessage = this.tieMessage;
    } else {
      this.EndMessage = this.loseMessage;
    }
  }

  youWin(){
    this.audioPlayer.src = "../../assets/audio/youWin.mp3";
    this.audioPlayer.play();
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PlayerArrayService } from '../player-array.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  testMettle = false;
  audioPlayer = new Audio();

  player

  playerStartStuff = new FormGroup({
    playerName: new FormControl(''),
    startItem: new FormControl('')
  });


  constructor(private playerService: PlayerArrayService, public builder: FormBuilder) { 
    this.playerStartStuff = this.builder.group({
      playerName: [null, Validators.required],
      startItem: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.audioPlayer.src = "../../assets/audio/MortalKombatTheme.mp3";
  }

  onTestMettle(){
    if(this.audioPlayer.paused){
      this.audioPlayer.play();
    } else {
      this.audioPlayer.pause();
    }
  }

  ngOnDestroy(){
    this.audioPlayer.pause();
  }

  onStart(){
    this.player = this.playerStartStuff.value;
    this.playerService.addToInventory(this.player["startItem"]);
    this.playerService.setName(this.player["playerName"]);

    console.log("player name is " + this.playerService.getName());
    console.log("player start item is " + this.playerService.getInventory());
  }
}
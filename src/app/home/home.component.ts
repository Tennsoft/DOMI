import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PlayerArrayService } from '../player-array.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  testMettle = false;
  audioPlayer = new Audio();

  playerStartStuff = new FormGroup({
    playerName: new FormControl(''),
    startItem: new FormControl('')
  });


  constructor(private playerService: PlayerArrayService) { }

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
    console.log(this.playerStartStuff.value);
  }
}
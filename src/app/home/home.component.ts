import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  testMettle = false;
  audioPlayer = new Audio();

  constructor() { }

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
}
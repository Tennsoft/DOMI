import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PlayerArrayService } from '../player-array.service';
import { RoomLayoutService } from '../room-layout.service';

import { rooms } from '../../../assets/rooms.json';
import { monsters } from '../../../assets/monsters.json';
import { treasure } from '../../../assets/treasure.json';
import { bosses } from '../../../assets/bosses.json';

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


  constructor(
    public playerService: PlayerArrayService, 
    public roomLayoutService: RoomLayoutService,
    public builder: FormBuilder,
    private router: Router) { 
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
    this.playerService.resetPosition(); 
    this.playerService.position = {x:1,y:0};
    this.playerService.setFightResult("");
    this.playerService.clearInventory();
    this.playerService.addToInventory(this.player["startItem"]);
    this.playerService.setName(this.player["playerName"]);

    this.roomLayoutService.scrambleRooms(rooms);
    this.roomLayoutService.scrambleRooms(monsters);
    this.roomLayoutService.scrambleRooms(bosses);
    
    let found_treasures = treasure.slice(-9);
    this.roomLayoutService.scrambleRooms(found_treasures);

    this.router.navigate(['/dungeon'])
    
  }
}
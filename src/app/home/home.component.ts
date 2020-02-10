import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PlayerArrayService } from '../player-array.service';
import { RoomLayoutService } from '../room-layout.service';

import { rooms } from '../../../assets/rooms.json';
import { monsters } from '../../../assets/monsters.json';
import { treasure } from '../../../assets/treasure.json';
import { bosses } from '../../../assets/bosses.json';
import { MonsterLayoutService } from '../monster-layout.service';

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
    startItem: new FormControl(''),
    difficulty: new FormControl('')
  });


  constructor(
    public playerService: PlayerArrayService, 
    public roomLayoutService: RoomLayoutService,
    public monsterLayoutService: MonsterLayoutService,
    public builder: FormBuilder,
    private router: Router) { 
    this.playerStartStuff = this.builder.group({
      playerName: [null, Validators.required],
      startItem: [null, Validators.required],
      difficulty: [null, Validators.required]
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
    if (this.player["difficulty"] === "easy") {
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

    for(var i = 0; i<this.monsterLayoutService.random_monster_layout.length; i++){
      this.monsterLayoutService.random_monster_layout[i].dead = false;
    }

    for(var i = 0; i<this.monsterLayoutService.random_boss_layout.length; i++){
      this.monsterLayoutService.random_boss_layout[i].dead = false;
    }

    for(var i = 0; i<found_treasures.length; i++){
      found_treasures[i].found = false;
      found_treasures[i].taken = false;
    }

    
    this.monsterLayoutService.random_monster_layout = this.monsterLayoutService.scrambleMonsters(monsters);
    this.monsterLayoutService.random_boss_layout = this.monsterLayoutService.scrambleMonsters(bosses);

    this.roomLayoutService.random_treasure_layout = this.roomLayoutService.scrambleRooms(found_treasures);

    //console.log(this.monsterLayoutService.random_monster_layout);
    //console.log(this.roomLayoutService.random_treasure_layout);

    this.router.navigate(['/dungeon'])
  }
  }
}
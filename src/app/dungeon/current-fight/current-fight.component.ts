import { Component, OnInit, DoCheck } from '@angular/core';
import { PlayerArrayService } from 'src/app/player-array.service';
import { AttackService } from 'src/app/attack.service';
import { MonsterLayoutService } from 'src/app/monster-layout.service';
import { MoveRoomService } from 'src/app/move-room.service'

@Component({
  selector: 'app-current-fight',
  templateUrl: './current-fight.component.html',
  styleUrls: ['./current-fight.component.css']
})
export class CurrentFightComponent implements OnInit, DoCheck {

  constructor(public playerArrayService: PlayerArrayService, 
              public attackService: AttackService,
              public monster_layout_service: MonsterLayoutService,
              public moveRoom: MoveRoomService ) { }

    monster;
    current_fight_damage;
    current_fight_die;
    current_treasure;
    monster_dead;
    curRoom
    newRoom

    monster_list;

  clearFightBox() {
    this.playerArrayService.setFightResult("")
    this.playerArrayService.getFightResult()
    // console.log("clearFightBox() called, attempted to clear fight box " + this.current_fight_damage)
  }

  ngOnInit() {
    this.monster_list = this.monster_layout_service.random_monster_layout;
    this.current_fight_damage = this.playerArrayService.getFightResult();
    this.curRoom= this.moveRoom.current_room_reduce();
  }

  ngDoCheck(){
    //get position
    // console.log("this is the current room " + this.curRoom)
    this.newRoom = this.moveRoom.current_room_reduce();
    // console.log("this is the new room" + this.newRoom)
    if (this.newRoom != this.curRoom) {
      this.clearFightBox()
      this.curRoom = this.newRoom
    }

    //get the monster
    this.monster = this.attackService.getMonster();
    
    //declare attack
    this.current_fight_damage = this.playerArrayService.getFightResult();
  }

  



}
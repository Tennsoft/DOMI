import { Component, OnInit, DoCheck } from '@angular/core';

import { PlayerArrayService } from 'src/app/services/player-array.service';
import { AttackService } from 'src/app/services/attack.service';
import { MonsterLayoutService } from 'src/app/services/monster-layout.service';
import { MoveRoomEasyService } from 'src/app/services/difficulty/move-room-easy.service';
import { UniqueEncountersService } from '../../services/uniqueencounters.service';

@Component({
  selector: 'app-current-fight',
  templateUrl: './current-fight.component.html',
  styleUrls: ['./current-fight.component.css']
})
export class CurrentFightComponent implements OnInit, DoCheck {

  constructor(
    public playerArrayService: PlayerArrayService, 
    public attackService: AttackService,
    public monster_layout_service: MonsterLayoutService,
    public moveRoom: MoveRoomEasyService,
    public uniqueEncounters: UniqueEncountersService) { }

    monster;
    current_fight_damage;
    //current_fight_die;
    current_treasure;
    monster_dead;
    curRoom;
    newRoom;

    monster_list;

  clearFightBox() {
    this.playerArrayService.setFightResult("")
    this.playerArrayService.getFightResult()
    // console.log("clearFightBox() called, attempted to clear fight box " + this.current_fight_damage)
  }

  ngOnInit() {
    this.monster_list = this.monster_layout_service.random_monster_layout;
    this.current_fight_damage = this.playerArrayService.getFightResult();
    this.curRoom = this.moveRoom.current_room_reduce();
  }

  ngDoCheck() {
    //get position
    // console.log("this is the current room " + this.curRoom)
    this.newRoom = this.moveRoom.current_room_reduce();
    // console.log("this is the new room" + this.newRoom)
    if (this.newRoom != this.curRoom) {
      this.clearFightBox()
      this.curRoom = this.newRoom
      //console.log(this.curRoom)
    }

    //get the monster
    this.monster = this.attackService.getMonster();
    
    //declare attack
    this.current_fight_damage = this.playerArrayService.getFightResult()
    if(this.current_fight_damage.length !== 0 ){
      if(this.uniqueEncounters.queueRoom === true){

      } else if (this.uniqueEncounters.monsterSummoned(this.curRoom)){

      } else if(this.monster === "Seer"){} else {
        this.current_fight_damage = this.current_fight_damage + " You found treasure! Check your inventory.";
        //console.log(this.playerArrayService.getTreasureFound())
      }
    }
    //console.log(this.current_fight_damage);
    //console.log( this.current_fight_damage+"You found treasure! Check your inventory.");
  }

}
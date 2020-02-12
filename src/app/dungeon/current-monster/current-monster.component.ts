import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { monsters } from '../../../../assets/monsters.json';
import { treasure } from '../../../../assets/treasure.json';
import { bosses } from '../../../../assets/bosses.json';

import { PlayerArrayService } from '../../player-array.service';
import { MoveRoomService } from 'src/app/move-room.service';
import { MonsterLayoutService } from 'src/app/monster-layout.service';
import { RoomLayoutService } from 'src/app/room-layout.service';
import { AttackService } from '../../attack.service';

@Component({
  selector: 'app-current-monster',
  templateUrl: './current-monster.component.html',
  styleUrls: ['./current-monster.component.css']
})
export class CurrentMonsterComponent implements OnInit, DoCheck, OnDestroy {

  
  // monster_list; 
  // boss_list; 
  // treasure_list;

  //initialize
  current_room: {x: number, y: number};
  current_room_abs_id;
  current_monster_base_name;
  current_monster_name;
  current_monster_desc;
  boss_monster_name;
  boss_monster_desc;

  can_search_for_treasure = this.playerArrayService.getSearchPossible();


  found_treasure = this.playerArrayService.getTreasureFound();
  current_treasure_name;
  current_treasure_desc;


  curRoom;
  newRoom;
  
  count_moves;
  count_temp = 0;
  sub: Subscription;
  had_a_fight;

  monster_list;
  boss_list;
  treasure_list;

  constructor(
    public playerArrayService: PlayerArrayService, 
    public move_room_service: MoveRoomService, 
    public monster_layout_service: MonsterLayoutService,
    public room_layout_service: RoomLayoutService,
    public attackService: AttackService) { 
    //console.log(this.treasure_list);
  }

  //bring in monsters, random order
  //monster_list = this.monster_layout_service.random_monster_layout;
  //bring in boss monsters, random order
  //boss_list = this.monster_layout_service.random_boss_layout;
  //bring in treasure to find, random order
  //treasure_list = this.room_layout_service.random_treasure_layout;


  ngOnInit() {
    this.curRoom = this.move_room_service.current_room_reduce();
    //bring in monsters, random order
    this.monster_list = this.monster_layout_service.random_monster_layout;
    //bring in boss monsters, random order
    this.boss_list = this.monster_layout_service.random_boss_layout;
    //bring in treasure to find, random order
    this.treasure_list = this.room_layout_service.random_treasure_layout;
    //console.log(this.treasure_list);

     //get the (x,y) coords
     this.current_room = this.playerArrayService.getPosition();


     //turn that into a single number to get an index from the rooms array
     this.current_room_abs_id = this.move_room_service.current_room_reduce();
     //console.log("current room abs id is "+this.current_room_abs_id);
    
     //and pull a monster for where you happen to be
     this.current_monster_base_name = this.monster_list[this.current_room_abs_id].name;
     this.current_monster_name = this.monster_list[this.current_room_abs_id].namePretty;
     this.current_monster_desc = this.monster_list[this.current_room_abs_id].description;

     if(this.current_monster_base_name == "treasure_find"){
       this.can_search_for_treasure = true;
       this.playerArrayService.setSearchPossible(true);
       //console.log()
       //console.log(this.playerArrayService.getSearchPossible());
     }
     
     //console.log(this.current_monster_base_name);
  }

  ngDoCheck(){

    this.newRoom = this.move_room_service.current_room_reduce();
    //console.log("this is the new room" + this.newRoom)
    //console.log(this.treasure_list);
    if (this.newRoom != this.curRoom) {
      this.clearTreasureBox();
      this.curRoom = this.newRoom;
    }
    //console.log(this.monster_list);
    this.current_room = this.playerArrayService.getPosition();
    this.found_treasure = this.playerArrayService.getTreasureFound();
    //this.had_a_fight = this.move_room_service.moveRoom(0,0,this.playerArrayService.getPosition())[1];
    //this.playerArrayService.setFightResult(this.had_a_fight);
    

   // console.log(this.playerArrayService.countSub.getValue());
   
    
    this.current_room_abs_id = this.move_room_service.current_room_reduce();
    //console.log(this.current_room_abs_id)

    if(this.current_room_abs_id == 6){
      this.can_search_for_treasure = false;
      this.playerArrayService.setTreasureFound(false);
      this.playerArrayService.setFightResult("");
      this.current_monster_name = this.boss_list[1].namePretty;
      this.current_monster_desc = this.boss_list[1].description;
    } else {
      //this.can_search_for_treasure = false;
      this.found_treasure = this.playerArrayService.getTreasureFound();
      this.playerArrayService.setSearchPossible(false);
      
      //if monster not dead, display it
      if(this.monster_list[this.current_room_abs_id].dead == false){
        //this.playerArrayService.setFightResult('');
        this.current_monster_base_name = this.monster_list[this.current_room_abs_id].name;
        this.current_monster_name = this.monster_list[this.current_room_abs_id].namePretty;
        this.current_monster_desc = this.monster_list[this.current_room_abs_id].description;
        // console.log(this.current_monster_base_name);
        if(this.current_monster_base_name == "treasure_find"){
          this.can_search_for_treasure = true;
          this.playerArrayService.setSearchPossible(true);
        }
        else{
          this.can_search_for_treasure = false;
          this.found_treasure = this.playerArrayService.getTreasureFound();
          this.current_treasure_name = "";
          this.current_treasure_desc = "";
        }
      }
      //if monster dead, don't display
      else if(this.monster_list[this.current_room_abs_id].dead == true){
        this.current_monster_base_name = "";
        this.current_monster_name = "";
        this.current_monster_desc = this.monster_list[this.current_room_abs_id].corpse;
        this.can_search_for_treasure = false;
        this.playerArrayService.setSearchPossible(false);
          // setTimeout(() =>{ 
          //   this.playerArrayService.setFightResult('');
          // }, 1900);
        }
   
    if(this.count_moves != this.count_temp){
     // console.log(this.count_moves + " "+ this.count_temp);
      this.found_treasure = false;
      this.count_temp = this.count_moves;
      
    }
    
    
    //console.log("current monster is "+ this.current_monster_name);
    
    
    }
    this.attackService.setMonster(this.current_monster_name);

    //console.log(this.playerArrayService.getPosition());

  }


  clearTreasureBox() {
    this.playerArrayService.setTreasureFound(false);
    this.playerArrayService.getTreasureFound();
    // console.log("clearFightBox() called, attempted to clear fight box " + this.current_fight_damage)
  }

  searchForTreasure(){
   
    if(this.treasure_list[this.current_room_abs_id].found == false && this.treasure_list[this.current_room_abs_id].taken == false){
      //this.found_treasure = true;
      this.treasure_list[this.current_room_abs_id].found = true;
      this.current_treasure_name = this.treasure_list[this.current_room_abs_id].namePretty;
      this.current_treasure_desc = this.treasure_list[this.current_room_abs_id].description;
      this.can_search_for_treasure = false;
      this.playerArrayService.setSearchPossible(false);
      
      this.playerArrayService.setTreasureFound(true);
      this.found_treasure = true;
      //console.log(this.count_moves);
      this.playerArrayService.addToInventory(this.treasure_list[this.current_room_abs_id].name);
      this.treasure_list[this.current_room_abs_id].taken = true;


      this.treasureSummonMonster();

      setTimeout(() => {
        this.found_treasure = false;
        this.playerArrayService.setTreasureFound(false);
        document.getElementById("search").hidden = true;
      }, 1900);
    }
    else{
      this.current_treasure_name = "";
      this.current_treasure_desc = "nothing new, even though you search carefully";
      this.found_treasure = true;
      this.playerArrayService.setTreasureFound(true);
      setTimeout(() =>{
        this.found_treasure = false;
        this.playerArrayService.setTreasureFound(false);
       }, 1900);
    }

  }

  treasureSummonMonster(){
    let chance = Math.floor( Math.random() * 10 );
    if( chance > 1 ) {
      //console.log("monster was summoned")
      let i = this.monster_list.length - 1;
      while( this.monster_list[i].name === 'treasure_find' ){
        //console.log(this.monster_list[i])
        i--;
      }
      //console.log(this.monster_list[i].namePretty);
      this.monster_list[this.current_room_abs_id] = this.monster_list[i];
      let temp2 = "A " + this.monster_list[i].namePretty + " heard the noise from your search for treasure and apporoached";

      this.monster_list[i].name = 'treasure_find';

      this.playerArrayService.setFightResult(temp2);
      setTimeout(() => {
        let temp = this.playerArrayService.getFightResult();
        console.log(temp);
      }, 1900);
      
    }
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

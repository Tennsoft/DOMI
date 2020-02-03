import { Component, OnInit, DoCheck } from '@angular/core';

//import { monsters } from '../../../../assets/monsters.json';


import { PlayerArrayService } from '../../player-array.service';
import { MoveRoomService } from 'src/app/move-room.service';
import { MonsterLayoutService } from 'src/app/monster-layout.service';

@Component({
  selector: 'app-current-monster',
  templateUrl: './current-monster.component.html',
  styleUrls: ['./current-monster.component.css']
})
export class CurrentMonsterComponent implements OnInit {

  //bring in monsters, random order
  monster_list = this.monster_layout_service.random_monster_layout;
  //bring in boss monsters, random order
  boss_list = this.monster_layout_service.random_boss_layout;

  //initialize
  current_room: {x: number, y: number};
  current_room_abs_id;
  current_monster_base_name;
  current_monster_name;
  current_monster_desc;
  boss_monster_name;
  boss_monster_desc;

  can_search_for_treasure = this.playerArrayService.getSearchPossible();

  constructor(public playerArrayService: PlayerArrayService,public move_room_service: MoveRoomService, public monster_layout_service: MonsterLayoutService) { 
    //console.log(this.monster_list);
  }

  ngOnInit() {
     //get the (x,y) coords
     this.current_room = this.playerArrayService.getPosition();
     //turn that into a single number to get an index from the rooms array
     this.current_room_abs_id = this.move_room_service.current_room_reduce();
     //and pull a monster for where you happen to be
     this.current_monster_base_name = this.monster_list[this.current_room_abs_id].name;
     this.current_monster_name = this.monster_list[this.current_room_abs_id].namePretty;
     this.current_monster_desc = this.monster_list[this.current_room_abs_id].description;

     if(this.current_monster_base_name == "treasure_find"){
       this.can_search_for_treasure = true;
       this.playerArrayService.setSearchPossible(true);
       console.log(this.playerArrayService.getSearchPossible());
     }
     
     //console.log(this.playerArrayService.getPosition());


  }

  ngDoCheck(){
    this.current_room = this.playerArrayService.getPosition();
    //console.log("current room is "+this.current_room_name);
    
    this.current_room_abs_id = this.move_room_service.current_room_reduce();
    //console.log(this.current_room_abs_id)
    if(this.current_room_abs_id == 6){
      this.current_monster_name = this.boss_list[1].namePretty;
      this.current_monster_desc = this.boss_list[1].description;
    }else{
      this.can_search_for_treasure = false;
      this.playerArrayService.setSearchPossible(false);
    this.current_monster_base_name = this.monster_list[this.current_room_abs_id].name;
    this.current_monster_name = this.monster_list[this.current_room_abs_id].namePretty;
    this.current_monster_desc = this.monster_list[this.current_room_abs_id].description;
    if(this.current_monster_base_name == "treasure_find"){
      this.can_search_for_treasure = true;
      this.playerArrayService.setSearchPossible(true);
      console.log(this.playerArrayService.getSearchPossible());
    }
    console.log("current monster is "+ this.current_monster_name);
    }
  }

  


}

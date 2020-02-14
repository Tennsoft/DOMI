import { Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { MoveRoomService } from '../move-room.service.js';
import { FourByFourMoveRoomService } from '../four-by-four-move-room.service';
import { PlayerArrayService } from '../player-array.service.js';




@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})


export class DungeonComponent implements OnInit, DoCheck, OnDestroy {

  //can_search_for_treasure = this.playerArrayService.getSearchPossible();
  constructor(
    private router: Router,
    public move_room_service: MoveRoomService, 
    public playerArrayService: PlayerArrayService,
    public four_by_four_move_room_service: FourByFourMoveRoomService
    ) {
      //this.curr_difficulty = this.playerArrayService.difficulty;
      //console.log(this.curr_difficulty);

     }


    //initialize
    cantGoNorth;
    cantGoSouth;
    cantGoEast;
    cantGoWest;
    currRoom;
    newRoom;


    curr_difficulty;

    subscription: Subscription;
  
  ngOnInit() {
    this.playerArrayService.resetPosition();
    this.playerArrayService.setFightResult("");
    if( this.playerArrayService.getName() === '' || this.playerArrayService.getInventory() === []){
      this.router.navigate(['/'])
    }

    // this.curr_difficulty = this.playerArrayService.seeDifficultyChange();
    // this.subscription = this.playerArrayService.difficultyChange.subscribe(value => {
    //    this.curr_difficulty = value;
    //  });
  
    this.curr_difficulty = window.history.state.difficulty;
    //this.curr_difficulty  = this.playerArrayService.getDifficulty();
    //console.log("difficulty in dungeon component is "+this.curr_difficulty);

    //if(this.curr_difficulty == "easy"){
    switch(this.curr_difficulty){
      case "easy":
        this.cantGoNorth = false;
        this.cantGoSouth = true;
        this.cantGoEast = false;
        this.cantGoWest = false;
        console.log("easy case")
        break;
      default:
      this.cantGoNorth = false;
      this.cantGoSouth = true;
      this.cantGoEast = false;
      this.cantGoWest = true;
      console.log("med or hard case")
      console.log("go north "+ this.cantGoNorth);
      console.log("go south "+ this.cantGoSouth);
      console.log("go east "+ this.cantGoEast);
      console.log("go west "+ this.cantGoWest);
      break;
    }

  

    this.currRoom = this.playerArrayService.getPosition();
    //this.newRoom = this.playerArrayService.getPosition();
    //console.log(this.newRoom);
    
  }

  // toggle(arg: boolean){
  //   if(arg == false){
  //     return arg = true;
  //   }
  //   else{
  //     return arg = false;
  //   }
  // };

   
  
  ngDoCheck(){
    let now_where = this.playerArrayService.getPosition();
    console.log(now_where.x + " " + now_where.y);
    //this.curr_difficulty = this.playerArrayService.getDifficulty();
    this.curr_difficulty = window.history.state.difficulty;
    console.log("difficulty is "+this.curr_difficulty);
    //console.log("type of current difficulty is "+typeof this.curr_difficulty);
    //movement buttons enable/disable for small dungeon
    if(this.curr_difficulty == "easy"){
      //console.log("you're playing the easy dungeon");
      if(now_where.x != 1){
        this.cantGoSouth = false;
      }

      if(now_where.x == 1){
     switch(now_where.y){
     case 2:
       //console.log("boss room");
       this.cantGoNorth = true;
       this.cantGoSouth = false;
       this.cantGoEast = true;
       this.cantGoWest = true;
       break;

     case 1:
       //console.log("moved north");
       this.cantGoNorth = false;
       this.cantGoSouth = false;
       this.cantGoEast = false;
       this.cantGoWest = false;
       break;

     case 0:
       this.cantGoNorth = false;
       this.cantGoSouth = true;
       this.cantGoEast = false;
       this.cantGoWest = false;
       break;
     
      default: 
        break;
    }
  }
  }
  //movement buttons enable/disable for 4x4 dungeon
  //if(curr_difficulty == "medium" || curr_difficulty == "hard"){
 else{
  if(now_where.x != 0){
      this.cantGoWest = false;
    }
    if(now_where.x == 0){
      this.cantGoWest = true;
    }
    if(now_where.x == 3){
      this.cantGoEast = true;
    }
    if(now_where.x != 3){
      this.cantGoEast = false;
    }
    if(now_where.y == 0){
      this.cantGoSouth = true;
    }
    if(now_where.y != 0){
      this.cantGoSouth = false;
    }
    if(now_where.y == 3){
      this.cantGoNorth = true;
    }
    if(now_where.y != 3){
      this.cantGoNorth = false;
    }

  }




  }
  

  onMoveNorth(){
    this.playerArrayService.setTreasureFound(false);
    let new_position = {};
    let current_position: {x: number, y: number} = this.playerArrayService.getPosition();
    if(window.history.state.difficulty == "easy"){
        new_position= this.move_room_service.moveRoom(0,1,current_position);
    }else{
        new_position = this.four_by_four_move_room_service.moveRoom(0,1,current_position);
    }
    this.playerArrayService.setPosition(new_position);
  
   
    
  }

  onMoveSouth(){
    this.playerArrayService.setTreasureFound(false);
    let new_position = {};
    let current_position: {x: number, y: number} = this.playerArrayService.getPosition();
    if(window.history.state.difficulty == "easy"){
       new_position= this.move_room_service.moveRoom(0,-1,current_position);
    }else{
       new_position = this.four_by_four_move_room_service.moveRoom(0,-1,current_position);
    }
    this.playerArrayService.setPosition(new_position);
    
    
    //console.log(this.playerArrayService.getOldPosition());
    // console.log(current_position);
    // console.log(this.playerArrayService.getPosition());
  }

  onMoveEast(){
    this.playerArrayService.setTreasureFound(false);
    let new_position = {};
    let current_position: {x: number, y: number} = this.playerArrayService.getPosition();
    if(window.history.state.difficulty == "easy"){
      new_position= this.move_room_service.moveRoom(1,0,current_position);
    }else{
      new_position = this.four_by_four_move_room_service.moveRoom(1,0,current_position);
    }
    this.playerArrayService.setPosition(new_position);
    
  
    //console.log(this.playerArrayService.countSub.getValue());
    // console.log(current_position);
    // console.log(this.playerArrayService.getPosition());

  }

  onMoveWest(){
    this.playerArrayService.setTreasureFound(false);
    let new_position = {};
    let current_position: {x: number, y: number} = this.playerArrayService.getPosition();
    if(window.history.state.difficulty == "easy"){
      new_position= this.move_room_service.moveRoom(-1,0,current_position);
    }else{
      new_position = this.four_by_four_move_room_service.moveRoom(-1,0,current_position);
    }
    this.playerArrayService.setPosition(new_position);
    
    
  
    //console.log(this.playerArrayService.getOldPosition());
    // console.log(current_position);
    // console.log(this.playerArrayService.getPosition());
  }

  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

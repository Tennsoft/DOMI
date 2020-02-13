import { Component, OnInit, OnDestroy, DoCheck, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { MoveRoomService } from '../move-room.service.js';
import { PlayerArrayService } from '../player-array.service.js';



@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})


export class DungeonComponent implements OnInit, DoCheck {

  //can_search_for_treasure = this.playerArrayService.getSearchPossible();
  constructor(
    private router: Router,
    public move_room_service: MoveRoomService, 
    public playerArrayService: PlayerArrayService
    ) {
      

     }


    //initialize
    cantGoNorth;
    cantGoSouth;
    cantGoEast;
    cantGoWest;
    currRoom;
    newRoom;

  
  ngOnInit() {
    this.playerArrayService.resetPosition();
    this.playerArrayService.setFightResult("");
    if( this.playerArrayService.getName() === '' || this.playerArrayService.getInventory() === []){
      this.router.navigate(['/'])
    }

    this.cantGoNorth = false;
    this.cantGoSouth = true;
    this.cantGoEast = false;
    this.cantGoWest = false;

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
    //console.log(now_where.y);
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
  

  onMoveNorth(){
    this.playerArrayService.setTreasureFound(false);
    let current_position: {x: number, y: number} = this.playerArrayService.getPosition();
    let new_position= this.move_room_service.moveRoom(0,1,current_position);
    this.playerArrayService.setPosition(new_position);
    // console.log(new_position.y);
    // console.log(typeof new_position);
    // switch(new_position.y){
    //  case 2:
    //    console.log("boss room");
    //    this.cantGoNorth = true;
    //    this.cantGoSouth = false;
    //    this.cantGoEast = true;
    //    this.cantGoWest = true;

    //  case 1:
    //    console.log("moved north");
    //    this.cantGoNorth = false;
    //    this.cantGoSouth = false;
    //    this.cantGoEast = false;
    //    this.cantGoWest = false;

    //  case 0:
    //    this.cantGoNorth = false;
    //    this.cantGoSouth = true;
    //    this.cantGoEast = false;
    //    this.cantGoWest = false;
     
    //   default: 
    //     break;
    // }
    
  }

  onMoveSouth(){
    this.playerArrayService.setTreasureFound(false);
    let current_position: {x: number, y: number} = this.playerArrayService.getPosition();
    let new_position = this.move_room_service.moveRoom(0,-1,current_position);
    this.playerArrayService.setPosition(new_position);

    if(new_position =={x:1,y:0}){
      console.log("entry room check");
       
    }
    
    
    //console.log(this.playerArrayService.getOldPosition());
    // console.log(current_position);
    // console.log(this.playerArrayService.getPosition());
  }

  onMoveEast(){
    this.playerArrayService.setTreasureFound(false);
    let current_position: {x: number, y: number} = this.playerArrayService.getPosition();
    let new_position = this.move_room_service.moveRoom(1,0,current_position);
    this.playerArrayService.setPosition(new_position);
  
    //console.log(this.playerArrayService.countSub.getValue());
    // console.log(current_position);
    // console.log(this.playerArrayService.getPosition());

  }

  onMoveWest(){
    this.playerArrayService.setTreasureFound(false);
    let current_position: {x: number, y: number} = this.playerArrayService.getPosition();
    let new_position = this.move_room_service.moveRoom(-1,0,current_position);
    this.playerArrayService.setPosition(new_position);
    
  
    //console.log(this.playerArrayService.getOldPosition());
    // console.log(current_position);
    // console.log(this.playerArrayService.getPosition());
  }

  
}

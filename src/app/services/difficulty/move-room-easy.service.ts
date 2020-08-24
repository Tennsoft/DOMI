import { Injectable } from '@angular/core';

import { PlayerArrayService } from '../player-array.service';

@Injectable({
  providedIn: 'root'
})
export class MoveRoomEasyService {

  new_pos = {x: 1, y: 0};

  constructor(public playerArrayService: PlayerArrayService) { }

  //each click method will pass in direction to move and current position
  //north button needs to pass in 0,1, and current room coord object
  //south button needs to pass in 0,-1, and current room coord object
  //east button needs to pass in 1,0, and current room coord object
  //west button needs to pass in -1,0,, and current room coord object 
  public moveRoom(first_coord: number, second_coord: number, current_pos: {x: number, y:number}){
    
    //small dungeon with room-wrapping

    // let new_pos = {};
    // console.log(this.new_pos.x +" " + this.new_pos.y + 'move-room')
    let new_x = current_pos.x;
    let new_y= current_pos.y;
    //deal with special cases in center column of dungeon
    if(current_pos.x == 1){
      //in boss room, can only back out
    if(current_pos.y == 2 && second_coord != -1){
        //just return a set of coordinates; handle updating player array elsewhere?
        this.new_pos = current_pos
        return this.new_pos;
      }
      //in entry, can't back out
      else if(current_pos.y == 0 && second_coord == -1){
        this.new_pos = current_pos
        return this.new_pos;
      }
      else if(current_pos.y == 0 && second_coord == 1){
        this.new_pos = {x:1, y:1};
        return this.new_pos;
      }
      //can go forward into boss room
      else if(current_pos.y == 1 && second_coord == 1){
        this.new_pos = {x:1,y:2}
        return this.new_pos;
      }
      else if(current_pos.y == 2 && second_coord == -1){
        this.new_pos = {x: 1, y: 1};
        return this.new_pos;
      }
      else if(current_pos.y == 1 && second_coord == -1){
        this.new_pos = {x: 1, y: 0};
        return this.new_pos;
      }
      else if(current_pos.y == 1 && second_coord == -1){
        this.new_pos = {x: 1, y: 0};
        return this.new_pos;
      }
      else if(second_coord == 0){
        new_x = (current_pos.x+first_coord)%3;
       new_y = (current_pos.y+second_coord)%2;
       if(new_x < 0){
        new_x = new_x + 3;
      }
      if(new_y<0){
        new_y = new_y+2; 
      }
        this.new_pos = {x: new_x, y: new_y};
        return this.new_pos;
      }
    }else{
      new_x = (current_pos.x+first_coord)%3;
      new_y = (current_pos.y+second_coord)%2;
      if(new_x < 0){
        new_x = new_x + 3;
      }
      if(new_y<0){
        new_y = new_y+2; 
      }

      
      this.new_pos = {x: new_x, y: new_y};
      //this.playerArrayService.setFightResult("");
      return this.new_pos;
     
    }
  }


  public current_room_reduce = function(){
    let room_abs_id = 1;
    let pos = this.playerArrayService.getPosition();
    switch(pos.y) { 
      case 0: {
        room_abs_id = pos.x;
        break; 
      } 
      case 1: { 
        switch(pos.x) { 
          case 0: { 
            room_abs_id = 5;
            break; 
          } 
          case 1: { 
            room_abs_id = 4;
             break; 
          }  
          case 2: { 
            room_abs_id = 3;
            break; 
          } 
          default: {
            break; 
          }
        } 
        break; 
      }  
      case 2: { 
        room_abs_id = 6;
        break; 
      } 
      default: {
        break; 
      }
    } 
    return room_abs_id;
  }
}

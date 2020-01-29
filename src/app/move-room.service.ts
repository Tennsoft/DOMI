import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoveRoomService {

  constructor() { }

  //each click method will pass in direction to move and current position
  //north button needs to pass in 0,1, and current room coord object
  //south button needs to pass in 0,-1, and current room coord object
  //east button needs to pass in 1,0, and current room coord object
  //west button needs to pass in -1,0,, and current room coord object 
  public moveRoom(first_coord: number, second_coord: number, current_pos: {x: number, y:number}){
    
    let new_pos = {};
    let new_x = current_pos.x;
    let new_y= current_pos.y;
    //deal with special cases in center column of dungeon
    if(current_pos.x==1){
      //in boss room, can only back out
      if(current_pos.y==2 && second_coord != -1){
        //just return a set of coordinates; handle updating player array elsewhere?
        return new_pos = current_pos;
      }
      //in entry, can't back out
      else if(current_pos.y==0 && second_coord == -1){
        return new_pos = current_pos;
      }
      //can go forward into boss room
      else if(current_pos.y==1 && second_coord ==1){
        return new_pos = {x: 1, y: 2};
      }
    }else{
      new_x = (current_pos.x+first_coord)%3;
      new_y = (current_pos.y+second_coord)%2;
      return new_pos = {x: new_x, y: new_y};
    }
    
 
  }
  

}

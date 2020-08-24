import { Injectable } from '@angular/core';
import { PlayerArrayService } from '../player-array.service';

@Injectable({
  providedIn: 'root'
})
export class MoveRoomMediumService {

  constructor(
    public playerArrayService: PlayerArrayService) { }

  new_pos = {x:0, y:0};

  public moveRoom(first_coord: number, second_coord: number, current_pos: {x: number, y:number}){


  //4 by 4 dungeon, no wrapping

  let new_pos = {};
  // console.log(this.new_pos.x +" " + this.new_pos.y + 'move-room')
  let new_x = current_pos.x;
  let new_y= current_pos.y;

  new_x = (current_pos.x+first_coord);
  new_y = (current_pos.y+second_coord);

  this.new_pos = {x: new_x, y: new_y};
      
  return this.new_pos;

  }

  public current_room_reduce = function(){  
    let pos = this.playerArrayService.getPosition();
    return ((4*pos.y) + pos.x);
  }
}

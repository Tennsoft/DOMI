import { Injectable } from '@angular/core';
import { PlayerArrayService } from '../player-array.service';

@Injectable({
  providedIn: 'root'
})
export class MoveRoomHardService {

  constructor( public playerArrayService: PlayerArrayService ) {}

  new_pos = { x:0, y:0, z:0 };

  public moveRoom(
    first_coord: number, 
    second_coord: number, 
    third_coord: number, 
    current_pos: { x: number, y:number, z: number }
    ){

    //4 by 4 by 2 dungeon, no wrapping

    let new_pos = {};

    let new_x = current_pos.x;
    let new_y = current_pos.y;
    let new_z = current_pos.z;

    new_x = ( current_pos.x + first_coord );
    new_y = ( current_pos.y + second_coord );
    new_z = ( current_pos.y + third_coord );

    this.new_pos = { x: new_x, y: new_y, z: new_z };
        
    return this.new_pos;
  }

  public current_room_reduce = function(){  
    let pos = this.playerArrayService.getPosition();
    let room_abs_id =((4*pos.y) + pos.x);
    if(pos.z === 1) {
      room_abs_id = room_abs_id + 15;
    }
    return room_abs_id;
  }
}
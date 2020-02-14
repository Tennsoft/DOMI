import { Injectable } from '@angular/core';
import { PlayerArrayService } from './player-array.service';

@Injectable({
  providedIn: 'root'
})
export class FourByFourMoveRoomService {

  constructor(public playerArrayService: PlayerArrayService) { }

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
    //console.log(this.playerArrayService.getPosition().x + " " + this.playerArrayService.getPosition().y + "current room reduce")
    let room_abs_id = 1;
    //bottom row y =0
    if(this.playerArrayService.getPosition().x == 0 && this.playerArrayService.getPosition().y == 0){ 
      room_abs_id = 0;
    }else if(this.playerArrayService.getPosition().x == 1 && this.playerArrayService.getPosition().y == 0){ 
      room_abs_id = 1;
    }else if(this.playerArrayService.getPosition().x == 2 && this.playerArrayService.getPosition().y == 0){ 
      room_abs_id = 2;
    }else if(this.playerArrayService.getPosition().x == 3 && this.playerArrayService.getPosition().y == 0){ 
      room_abs_id = 3;
      //second row y = 1
    }else if(this.playerArrayService.getPosition().x == 0 && this.playerArrayService.getPosition().y == 1){ 
      room_abs_id = 4;
    }else if(this.playerArrayService.getPosition().x == 1 && this.playerArrayService.getPosition().y == 1){ 
      room_abs_id = 5;
    }else if(this.playerArrayService.getPosition().x == 2 && this.playerArrayService.getPosition().y == 1){ 
      room_abs_id = 6;
    }else if(this.playerArrayService.getPosition().x == 3 && this.playerArrayService.getPosition().y == 1){ 
      room_abs_id = 7;
    }
    //third row y = 2
    else if(this.playerArrayService.getPosition().x == 0 && this.playerArrayService.getPosition().y == 2){ 
      room_abs_id = 8;
    }else if(this.playerArrayService.getPosition().x == 1 && this.playerArrayService.getPosition().y == 2){ 
      room_abs_id = 9;
    }else if(this.playerArrayService.getPosition().x == 2 && this.playerArrayService.getPosition().y == 2){ 
      room_abs_id = 10;
    }else if(this.playerArrayService.getPosition().x == 3 && this.playerArrayService.getPosition().y == 2){ 
      room_abs_id = 11;
    }
    //fourth row y = 3
    else if(this.playerArrayService.getPosition().x == 0 && this.playerArrayService.getPosition().y == 3){ 
      room_abs_id = 12;
    }else if(this.playerArrayService.getPosition().x == 1 && this.playerArrayService.getPosition().y == 3){ 
      room_abs_id = 13;
    }else if(this.playerArrayService.getPosition().x == 2 && this.playerArrayService.getPosition().y == 3){ 
      room_abs_id = 14;
    }else if(this.playerArrayService.getPosition().x == 3 && this.playerArrayService.getPosition().y == 3){ 
      room_abs_id = 15;
    }


    return room_abs_id;
  }

}

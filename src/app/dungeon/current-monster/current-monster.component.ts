import { Component, OnInit } from '@angular/core';

import { DungeonComponent } from '../dungeon.component';
import { monsters } from '../../../../assets/monsters.json';

import { PlayerArrayService } from '../../player-array.service';
import { MoveRoomService } from 'src/app/move-room.service';
import { MonsterLayoutService } from 'src/app/monster-layout.service';

@Component({
  selector: 'app-current-monster',
  templateUrl: './current-monster.component.html',
  styleUrls: ['./current-monster.component.css'],
  providers: [PlayerArrayService, MoveRoomService, MonsterLayoutService]
})
export class CurrentMonsterComponent implements OnInit {

  constructor(public playerArrayService: PlayerArrayService,public move_room_service: MoveRoomService, public monster_layout_service: MonsterLayoutService) { 
    console.log(this.monster_list);
  }

  ngOnInit() {
  }

  current_room: {x: number, y: number} = this.playerArrayService.position;
  current_room_abs_id = this.move_room_service.current_room_reduce(this.current_room.x, this.current_room.y);

  //monster display
  monster_list = this.monster_layout_service.random_monster_layout;
  //pull names and descriptions 
  current_monster_name: string = this.monster_list[this.current_room_abs_id].namePretty;
  current_monster_desc: string = this.monster_list[this.current_room_abs_id].description;

}

import { Component, OnInit, Output, Inject } from '@angular/core';

import { rooms } from '../../../assets/rooms.json';
import { MonsterLayoutService } from '../monster-layout.service.js';
import { MoveRoomService } from '../move-room.service.js';



@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css'],
  providers: [MonsterLayoutService, MoveRoomService]
})
export class DungeonComponent implements OnInit {

  constructor(public monster_layout_service: MonsterLayoutService) { }

  ngOnInit() {
   
    // let dungeonLayout = rooms.map(a => a.id);
    // function newDungeon(array) {
    //  array.sort(() => Math.random() - 0.5);
    // }
    // let my_new_dungeon = newDungeon(dungeonLayout);
    // return my_new_dungeon;
    //console.log(dungeonLayout);

    //monsters...


  }

 

}

import { Component, OnInit, Output } from '@angular/core';

import { rooms } from '../../../assets/rooms.json';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
    let dungeonLayout = rooms.map(a => a.id);
    function newDungeon(array) {
     array.sort(() => Math.random() - 0.5);
    }
    let my_new_dungeon = newDungeon(dungeonLayout);
    return my_new_dungeon;
    //console.log(dungeonLayout);
  }

  @Output() my_new_dungeon;  

}

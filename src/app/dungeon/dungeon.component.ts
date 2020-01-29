import { Component, OnInit } from '@angular/core';

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
    newDungeon(dungeonLayout);
    console.log(dungeonLayout);
  }

}

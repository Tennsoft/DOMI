import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dungeon-room',
  templateUrl: './dungeon-room.component.html',
  styleUrls: ['./dungeon-room.component.css']
})
export class DungeonRoomComponent implements OnInit {

  constructor() {
    const roomCoords:{} = {x:0, y:1}
    const id: number = 6;
    const name: string = "dungeonRoom";
    const namePretty: string = "Dungeon";
    const description: string = "The smell hits you before you have time to take in your surroundings. It's dark, with chains and cages lining the walls, lit with lightly flickering torches."
  }

  ngOnInit() {
  }

}

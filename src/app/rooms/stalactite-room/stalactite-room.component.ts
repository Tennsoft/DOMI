import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stalactite-room',
  templateUrl: './stalactite-room.component.html',
  styleUrls: ['./stalactite-room.component.css']
})
export class StalactiteRoomComponent implements OnInit {

  constructor() {
    const roomCoords:{} = {x:1, y:2}
    const id: number = 4;
    const name: string = "stalactiteRoom";
    const namePretty: string = "Stalactite Cave";
    const description: string = "Stalactites in many colors festoon the ceiling in this room.  The floor is bumpy with their partner stalagmites.  You'll have to pick your way through carefully."
   }

  ngOnInit() {
  }

}

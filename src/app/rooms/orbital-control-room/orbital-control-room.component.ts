import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orbital-control-room',
  templateUrl: './orbital-control-room.component.html',
  styleUrls: ['./orbital-control-room.component.css']
})
export class OrbitalControlRoomComponent implements OnInit {

  constructor() {
    const roomCoords:{} = {x:2, y:0}
   }

  ngOnInit() {
    const roomCoords:{} = {x:1, y:1};
    const id: number = 5;
    const name: string = "orbitalControlRoom";
    const namePretty: string = "Orbital Ion Canon Control Room";
    const description: string = "This room appears to have many computers running at once with a large screen detailing various other places in the world. How did you get here?"
  }

}

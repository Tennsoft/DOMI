import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camp-room',
  templateUrl: './camp-room.component.html',
  styleUrls: ['./camp-room.component.css']
})
export class CampRoomComponent implements OnInit {
  constructor() { 
    const id: number = 2;
    const name: string = "campRoom";
    const namePretty: string = "Abandoned Camp";
    const description: string = "This room appears to be where someone has made camp. There are ashes where a fire was made, but has been long extinguished. A bedroll lies nearby. The rest of the room is sparse."
    const roomCoords:{} = {x:0, y:0}
  }

  ngOnInit() {
  }

}

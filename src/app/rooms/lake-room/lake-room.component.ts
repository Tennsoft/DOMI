import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lake-room',
  templateUrl: './lake-room.component.html',
  styleUrls: ['./lake-room.component.css']
})
export class LakeRoomComponent implements OnInit {

  constructor() {
    const roomCoords:{} = {x:1, y:1};
    const id: number = 3;
    const name: string = "lakeRoom";
    const namePretty: string = "The Lake";
    const description: string = "A dark pool with an ornately carved stone lip fills the center of this room.  The water is very still.  You can't tell how deep it is."
    
  }

  ngOnInit() {
  }

}

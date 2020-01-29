import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragon-cave',
  templateUrl: './dragon-cave.component.html',
  styleUrls: ['./dragon-cave.component.css']
})
export class DragonCaveComponent implements OnInit {

  constructor() {
    const roomCoords:{} = {x:1, y:0};
    const id: number = 7;
    const name: string = "dragonsCave";
    const namePretty: string = "Dragon's Home";
    const description: string = "As you enter the room, you see a two dragons laying around a raised stone platform. The edges of the room are darkend and they do not appear to be paying attention to you."
  }

  ngOnInit() {
  }

}

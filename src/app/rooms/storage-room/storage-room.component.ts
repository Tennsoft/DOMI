import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage-room',
  templateUrl: './storage-room.component.html',
  styleUrls: ['./storage-room.component.css']
})
export class StorageRoomComponent implements OnInit {

  constructor() { 
    const roomCoords:{} = {x:2, y:1}
    const id: number = 1;
    const name: string = "storageRoom";
    const namePretty: string = "Storage Room";
    const description: string = "This is what appears to be an old storage closet. You see dusty shelves with spider webs. A few objects line the shelves, such as cups and a broom. There is a stench of stale air mixed with pine. Perhaps someone once kept the dungeon clean."
  }

  ngOnInit() {
  }

}

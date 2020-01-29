import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styles: []
})
export class EndScreenComponent implements OnInit {

  EndMessage = "You Survived The Dungeon";

  constructor() { }

  ngOnInit() {
  }
}
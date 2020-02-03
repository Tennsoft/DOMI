import { Component, OnInit } from '@angular/core';

import { PlayerArrayService } from '../../player-array.service.js';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.css']
})
export class HealthBarComponent implements OnInit {

  playerStartHealth: number = this.playerArrayService.getHealth().maxHP
  constructor(public playerArrayService: PlayerArrayService) {}
  currentHealth: number = this.playerArrayService.getHealth().curHP

  getCurrentHp() {
    
  }

  ngOnInit() {
    console.log("Starting Health is " + this.playerStartHealth + ". Current Health is " + this.currentHealth);

  }




}

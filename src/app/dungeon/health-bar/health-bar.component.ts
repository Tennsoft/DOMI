import { Component, OnInit, DoCheck } from '@angular/core';

import { PlayerArrayService } from '../../player-array.service.js';
import { AttackService } from '../../attack.service';
import { HealthChangeService } from '../../health-change.service'

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.css']
})
// @Input(

export class HealthBarComponent implements OnInit, DoCheck {

  // playerStartHealth: number
  // currentHealth: number
  playerStartHealth: number = this.playerArrayService.getHealth().maxHP;
  currentHealth: number = this.healthChange.currentHealth;
  
  constructor(public playerArrayService: PlayerArrayService, public healthChange: HealthChangeService) {}
  ngDoCheck() {
    
    if (this.healthChange.updateLife) {
      this.currentHealth = this.healthChange.updateLife();
    }
    console.log("ngDoCheck for health ran. It is " + this.currentHealth)
  }

  // loseALife() {
  //   this.currentHealth = this.playerArrayService.getHealth().curHP;
  // }

  ngOnInit() {
    console.log("Starting Health is " + this.playerStartHealth + ". Current Health is " + this.currentHealth);
    // this.playerArrayService.loseHealth()
    //   .subscribe(
    //     currentHealth => this.playerArrayService.getHealth().curHP,
    //   )

  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("NG ON CHANGES IS WORKING")
  //   if (changes['health'].currentValue) {
  //     this.currentHealth = this.playerArrayService.getHealth().curHP
  //   }
  // }




}

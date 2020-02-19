import { Component, OnInit, DoCheck } from '@angular/core';

import { PlayerArrayService } from '../../player-array.service';
import { HealthChangeService } from '../../health-change.service'

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.css']
})
// @Input(

export class HealthBarComponent implements OnInit, DoCheck {

  constructor(
    public playerArray: PlayerArrayService, 
    public healthChange: HealthChangeService) {}

  playerStartHealth: number = this.playerArray.getHealth().maxHP;
  currentHealth: number = this.healthChange.currentHealth;
  playerScore;

  ngDoCheck() {
    this.playerScore = this.playerArray.getScore();
    //console.log(this.playerArray.score);
    //console.log(this.playerArray.getScore());
    //console.log(this.playerScore);
    
    if (this.healthChange.updateLife) {
      this.currentHealth = this.healthChange.updateLife();
    }
    //console.log("ngDoCheck for health ran. It is " + this.currentHealth)
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

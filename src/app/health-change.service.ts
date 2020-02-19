import { Injectable } from '@angular/core';

import { PlayerArrayService } from './player-array.service';

@Injectable({
  providedIn: 'root'
})
export class HealthChangeService {

  constructor(
    public playerArray: PlayerArrayService
  ) {}

  currentHealth: number = this.playerArray.health.curHP

  updateLife() {
    // this.currentHealth = this.playerArray.health.curHP
    return this.playerArray.health.curHP
    //console.log('update life ran. New Health: ' + this.currentHealth)
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniqueEncountersService {

  constructor() { }

  //queueRoom info
  queuelength = 5;
  queueRoom = false;

  getQueueLength() {
    return this.queuelength;
  }

  //Treasure Search Room Info
  can_search = false;
  getSearchPossible() {
    return this.can_search;
  }

  setSearchPossible(arg) {
    return this.can_search = arg;
  }

  treasure_found = false;
  getTreasureFound() {
    return this.treasure_found;
  }

  setTreasureFound(arg) {
    return this.treasure_found = arg;
  }
  //summoning monsters
  summonedMonstersLocations = [];

  newSummonedMonster(currentLocation){
    this.summonedMonstersLocations.push(currentLocation);
  }

  monsterSummoned(currentLocation){
    if( this.summonedMonstersLocations.indexOf(currentLocation) === -1 ){
      return false;
    } else {
      return true;
    }
  }
  //contract demon
  demonRoom = false;
}


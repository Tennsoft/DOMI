import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { PlayerArrayService } from '../../player-array.service';
import treasure from '../../../../assets/treasure.json';
import { AttackService } from 'src/app/attack.service';
import { HealthChangeService } from '../../health-change.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnChanges {
  itemDesc = [];
  inventory;

  constructor( 
    private playerArrayConst : PlayerArrayService, 
    public healthChange: HealthChangeService,
    private attackService : AttackService ) { }

  ngOnInit(){
    this.inventory = this.playerArrayConst.getInventory();
  }

  ngOnChanges( changes: SimpleChanges ) {
    this.inventory = this.playerArrayConst.getInventory();
  }

  getDesc(item) {
      let chosen = treasure.treasure.filter(function(items) {
      return(items.name === item);
    })[0];
    return chosen.description;
  }

  getName(item){
    let chosen = treasure.treasure.filter(function(items) {
      return(items.name === item);
    })[0];
    return chosen.namePretty;
  }

  getItemType(item){
    let chosen = treasure.treasure.filter(function(items) {
    return(items.name === item);
  })[0];
  return chosen.effect;
  }

  getDamageType(item){
    let chosen = treasure.treasure.filter(function(items) {
    return(items.name === item);
  })[0];
  return chosen.strength;
  }

  getHealAmmount(item){
    if(item === "lesserheathPotion"){
      this.playerArrayConst.gainHealth();
    } 
    if(item === "heathPotion"){
      this.playerArrayConst.gainHealth();
      this.playerArrayConst.gainHealth();
    } 
    if(item === "greaterheathPotion"){
      this.playerArrayConst.gainHealth();
      this.playerArrayConst.gainHealth();
      this.playerArrayConst.gainHealth();
    } 
  }

  useInventoryItem(item){
    if( this.getItemType(item) === 'weapon') {
      this.attackService.attackDeclared(this.getDamageType(item))
    } else if( this.getItemType(item) === 'heal' ) {
      this.getHealAmmount(item);
      this.healthChange.updateLife();
      this.playerArrayConst.removeFromInventory(item);
      this.inventory = this.playerArrayConst.getInventory();
    } else if( this.getItemType(item) === 'gold' ) {
      this.playerArrayConst.spendGold();
      if(this.playerArrayConst.getGold() < 1){
        this.playerArrayConst.removeFromInventory(item);
      }
      this.inventory = this.playerArrayConst.getInventory();
    }
  }
}

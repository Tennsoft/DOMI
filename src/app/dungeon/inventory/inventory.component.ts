import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { PlayerArrayService } from '../../player-array.service';
import treasure from '../../../../assets/treasure.json';
import { AttackService } from 'src/app/attack.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnChanges {
  itemDesc = [];
  inventory;

  constructor( private playerArrayConst : PlayerArrayService, private attackService : AttackService ) { }

  ngOnInit(){
    this.inventory = this.playerArrayConst.getInventory();
    // this.playerArrayConst.inventoryUpdated.subscribe(
    //   () => {
        
    //   }
    // );
  }
  ngOnChanges( changes: SimpleChanges ) {}

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
  useInventoryItem(item){
    if( this.getItemType(item) === 'weapon') {
      this.attackService.attackDeclared(this.getDamageType(item))
      //console.log(this.treasure_list[my_index]);
      
    }
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';
import { PlayerArrayService } from '../../player-array.service';
import treasure from '../../../../assets/treasure.json';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnChanges {
  itemDesc = [];
  inventory;

  constructor( private playerArrayConst : PlayerArrayService) { }

  ngOnInit(){
    this.inventory = this.playerArrayConst.getInventory();
    console.log(this.inventory);
    console.log(treasure.treasure);
    console.log(treasure.treasure[0]);
     let filtered = treasure.treasure.filter(function(item) {
       return(item.name === 'sword');
     })[0];
    console.log(filtered.namePretty);
  }
  ngOnChanges( ) {}

  getDesc(item) {
      let chosen = treasure.treasure.filter(function(items) {
      return(items.name === item);
    })[0];
    return chosen.description;
  }


}

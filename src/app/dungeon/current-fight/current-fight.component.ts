import { Component, OnInit } from '@angular/core';
import { PlayerArrayService } from 'src/app/player-array.service';
import { AttackService } from 'src/app/attack.service';

@Component({
  selector: 'app-current-fight',
  templateUrl: './current-fight.component.html',
  styleUrls: ['./current-fight.component.css']
})
export class CurrentFightComponent implements OnInit {

  constructor(public playerArrayService: PlayerArrayService, 
              public attackService: AttackService ) { }

  ngOnInit() {
  }

}

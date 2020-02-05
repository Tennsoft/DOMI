import { Component, OnInit, DoCheck } from '@angular/core';
import { PlayerArrayService } from 'src/app/player-array.service';
import { AttackService } from 'src/app/attack.service';
import { MonsterLayoutService } from 'src/app/monster-layout.service';

@Component({
  selector: 'app-current-fight',
  templateUrl: './current-fight.component.html',
  styleUrls: ['./current-fight.component.css']
})
export class CurrentFightComponent implements OnInit {

  constructor(public playerArrayService: PlayerArrayService, 
              public attackService: AttackService,
              public monster_layout_service: MonsterLayoutService ) { }

    monster;
    current_fight_damage;
    current_fight_die;
    current_treasure;
    monster_dead;

    monster_list = this.monster_layout_service.random_monster_layout;


  ngOnInit() {
  }

  ngDoCheck(){
    //get the monster
    this.monster = this.attackService.getMonster();
    //declare attack
    this.current_fight_damage = this.playerArrayService.getFightResult();

  }

  



}

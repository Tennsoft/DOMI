import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";  
import { ShortcutInput, KeyboardShortcutsComponent } from "ng-keyboard-shortcuts";  
import { PlayerArrayService } from './player-array.service';
import { AttackService } from './attack.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  title = 'domi';
  shortcuts: ShortcutInput[] = [];  
  constructor(
    private playerArray : PlayerArrayService,
    private attackService : AttackService
  ){}
    hideDev(){
      if(document.getElementById("devBox").hidden){
        document.getElementById("devBox").hidden = false;
      } else {
        document.getElementById("devBox").hidden = true;
      }
    }
    @ViewChild('input', {static: false}) input: ElementRef;  
  
    ngAfterViewInit(): void {  
        this.shortcuts.push(             
          {
              key: ["d e v"],
              label: "Sequences",
              description: "dev box",
              command: () => this.hideDev()
          },           
          {
              key: ["up up down down left right left right b a enter"],
              label: "Sequences",
              description: "Konami code!",
              command: () => this.attackService.addWeakness()
          },             
          {
              key: ["h e a l t h"],
              label: "Sequences",
              description: "health potion",
              command: () => this.playerArray.addHealthPotion()
          },             
          {
              key: ["b e a t b o s s"],
              label: "Sequences",
              description: "win the game ",
              command: () => this.attackService.addBossWeakness()
          },             
          {
              key: ["d e a t h n o t e"],
              label: "Sequences",
              description: "win the game ",
              command: () => this.playerArray.addToInventory('lesserheathPotion'),
          },             
          {
              key: ["a d d g o l d"],
              label: "Sequences",
              description: "adds gold",
              command: () => this.playerArray.addToInventory('gold')
          },             
          {
              key: ["d i e"],
              label: "Sequences",
              description: "adds gold",
              command: () => this.playerArray.instantDeath()
          }
        );  
    }  
    @ViewChild(KeyboardShortcutsComponent, {static: false}) private keyboard: KeyboardShortcutsComponent;  
  
}

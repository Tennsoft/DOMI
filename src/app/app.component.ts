import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";  
import { ShortcutInput, ShortcutEventOutput, KeyboardShortcutsComponent } from "ng-keyboard-shortcuts";  
import { PlayerArrayService } from './player-array.service';
import { treasure } from '../../assets/treasure.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  title = 'domi';
  shortcuts: ShortcutInput[] = [];  
  constructor(
    private playerArray : PlayerArrayService
  ){}
    @ViewChild('input', {static: false}) input: ElementRef;  
  
    ngAfterViewInit(): void {  
        this.shortcuts.push(             
          {
              key: ["up up down down left right left right b a enter"],
              label: "Sequences",
              description: "Konami code!",
              command: () => this.playerArray.addBossItem()
          },             
          {
              key: ["h e a l t h"],
              label: "Sequences",
              description: "Konami code!",
              command: () => this.playerArray.addToInventory('heathPotion'),
          }
        );  
    }  
    @ViewChild(KeyboardShortcutsComponent, {static: false}) private keyboard: KeyboardShortcutsComponent;  
  
}

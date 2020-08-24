import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { KeyboardShortcutsModule }     from 'ng-keyboard-shortcuts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { MoveRoomEasyService } from './services/difficulty/move-room-easy.service';
import { CurrentRoomComponent } from './dungeon/current-room/current-room.component';
import { InventoryComponent } from './dungeon/inventory/inventory.component';
import { CurrentMonsterComponent } from './dungeon/current-monster/current-monster.component';
import { MonsterLayoutService } from './services/monster-layout.service';
import { RoomLayoutService } from './services/room-layout.service';
import { PlayerArrayService } from './services/player-array.service';
import { HealthBarComponent } from './dungeon/health-bar/health-bar.component';
import { CurrentFightComponent } from './dungeon/current-fight/current-fight.component';
import { AttackService } from './services/attack.service';
import { DevBoxComponent } from './dev-box/dev-box.component';
import { MoveRoomMediumService } from './services/difficulty/move-room-medium.service';
import { UniqueEncountersService } from './services/uniqueencounters.service';


@NgModule({
  declarations: [
    AppComponent,
    DungeonComponent,
    HomeComponent,
    EndScreenComponent,
    CurrentRoomComponent,
    InventoryComponent,
    CurrentMonsterComponent,
    HealthBarComponent,
    CurrentFightComponent,
    DevBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeyboardShortcutsModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    MoveRoomEasyService, 
    MonsterLayoutService, 
    RoomLayoutService, 
    PlayerArrayService, 
    AttackService, 
    MoveRoomMediumService, 
    UniqueEncountersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

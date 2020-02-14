import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { KeyboardShortcutsModule }     from 'ng-keyboard-shortcuts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { MoveRoomService } from './move-room.service';
import { CurrentRoomComponent } from './dungeon/current-room/current-room.component';
import { InventoryComponent } from './dungeon/inventory/inventory.component';
import { CurrentMonsterComponent } from './dungeon/current-monster/current-monster.component';
import { MonsterLayoutService } from './monster-layout.service';
import { RoomLayoutService } from './room-layout.service';
import { PlayerArrayService } from './player-array.service';
import { HealthBarComponent } from './dungeon/health-bar/health-bar.component';
import { CurrentFightComponent } from './dungeon/current-fight/current-fight.component';
import { AttackService } from './attack.service';
import { DevBoxComponent } from './dev-box/dev-box.component';
import { FourByFourMoveRoomService } from './four-by-four-move-room.service';


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
  providers: [MoveRoomService, MonsterLayoutService, RoomLayoutService, PlayerArrayService, AttackService, FourByFourMoveRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }

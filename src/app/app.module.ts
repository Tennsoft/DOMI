import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { StorageRoomComponent } from './rooms/storage-room/storage-room.component';
import { CampRoomComponent } from './rooms/camp-room/camp-room.component';
import { StalactiteRoomComponent } from './rooms/stalactite-room/stalactite-room.component';
import { LakeRoomComponent } from './rooms/lake-room/lake-room.component';
import { OrbitalControlRoomComponent } from './rooms/orbital-control-room/orbital-control-room.component';
import { DungeonRoomComponent } from './rooms/dungeon-room/dungeon-room.component';
import { DragonCaveComponent } from './rooms/dragon-cave/dragon-cave.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { MoveRoomService } from './move-room.service';
import { CurrentRoomComponent } from './dungeon/current-room/current-room.component';
import { InventoryComponent } from './dungeon/inventory/inventory.component';
import { CurrentMonsterComponent } from './dungeon/current-monster/current-monster.component';
import { MonsterLayoutService } from './monster-layout.service';
import { RoomLayoutService } from './room-layout.service';
import { PlayerArrayService } from './player-array.service';
import { HealthBarComponent } from './dungeon/health-bar/health-bar.component';
import { CurrentFightComponent } from './current-fight/current-fight.component';


@NgModule({
  declarations: [
    AppComponent,
    DungeonComponent,
    StorageRoomComponent,
    CampRoomComponent,
    StalactiteRoomComponent,
    LakeRoomComponent,
    OrbitalControlRoomComponent,
    DungeonRoomComponent,
    DragonCaveComponent,
    HomeComponent,
    EndScreenComponent,
    CurrentRoomComponent,
    InventoryComponent,
    CurrentMonsterComponent,
    HealthBarComponent,
    CurrentFightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MoveRoomService, MonsterLayoutService, RoomLayoutService, PlayerArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

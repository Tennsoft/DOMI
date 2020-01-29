import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    EndScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MoveRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { MoveRoomService } from './move-room.service';


@NgModule({
  declarations: [
    AppComponent,
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

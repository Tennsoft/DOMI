import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DungeonComponent } from './dungeon/dungeon.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dungeon', component: DungeonComponent, 
  // children: [{
  //   path: 'dungeon/:currentRoom'}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndScreenComponent } from './end-screen/end-screen.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  //{ path:"/dungeon", },
  { path: "endScreen", component: EndScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

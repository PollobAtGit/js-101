import { NgModule } from '@angular/core';
import { RouterModule, Router } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { Routes } from '@angular/router/src/config';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './app.component';
import { InputComponent } from "./an.component";
import { PostComponent } from "./Post.component";
import { PostService } from "./Post.service";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "posts", component: PostComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    InputComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [HomeComponent]
})

export class AppModule { }

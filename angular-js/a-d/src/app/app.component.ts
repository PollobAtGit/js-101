import { Component } from '@angular/core';
import { PostComponent } from "./Post.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class HomeComponent {
  title = 'app !';
}

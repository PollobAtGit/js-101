import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // POI: Angular injects a singleton. So this MessageService is same as the service that's injected to
  // HeroesService
  constructor(public msgService: MessageService) { }

  ngOnInit() {
  }

  // POI: Does member method need to public to have access to html view?
  public clearMessages() {
    this.msgService.clear();
  }
}

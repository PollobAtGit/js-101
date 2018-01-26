import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  public messages: string[] = [];
  constructor() { }

  public add(msg: string) {
    this.messages.push(msg);
  }

  clear() {
    this.messages = [];
  }
}

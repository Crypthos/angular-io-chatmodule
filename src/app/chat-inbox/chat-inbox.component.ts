import { Component, OnInit } from '@angular/core';
import {io} from 'socket.io-client';


const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})
export class ChatInboxComponent implements OnInit {

  public socket;
  public message: string;

  constructor() { }

  ngOnInit(): void {
    this.setupSocketConnection();
  }

  setupSocketConnection(): any {
    this.socket = io(SOCKET_ENDPOINT);
  }

  SendMessage(): any {
    this.socket.emit('message', this.message);
    this.message = '';
  }
}

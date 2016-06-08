import { Component } from '@angular/core';
import * as io from 'socket.io-client';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'angular2socket-app',
  templateUrl: 'angular2socket.component.html',
  styleUrls: ['angular2socket.component.css']
})
export class Angular2socketAppComponent {
  socket = null;
  chatinp = '';

  
  constructor() {
    this.socket = io('http://localhost:3000');
    let listener = Observable.fromEvent(this.socket, 'message'); 
    listener.subscribe((payload) => { 
    console.log(payload); })    
  }
  
  send(msg) {
    this.socket.emit('message', msg);
   }
}
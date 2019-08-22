import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';



@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.less']
})
export class ChatDialogComponent implements OnInit {

 messages: Observable<Message[]>;
 formValue: string;

  constructor(public chat: ChatService) { }

  ngOnInit() {
  	 this.chat.converse('Human presence detected 🤖. How can I help you? ');
   //this.chat.converse('Human presence detected 🤖. How can I help you? ');
	//this.addBotMessage('Human presence detected 🤖. How can I help you? ');
  	// appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
     // .scan((acc, val) => acc.concat(val) );
      .pipe(scan((acc, val) => acc.concat(val)));
  }

    sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

  // addBotMessage(text) {
  // // this.chat.converse(this.formValue);
  //   });

}

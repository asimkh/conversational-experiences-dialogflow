import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { ApiAiClient } from 'dialogflow';
import {ApiAiClient} from "api-ai-javascript";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
//import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import 'rxjs/operators';
import { map } from 'rxjs/operators';


// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

readonly token: string = environment.dialogflow.angularBot;
//readonly client: string = "https://api.dialogflow.com/v1/query?v=20150910";
readonly client: string = "https://dialogflow.googleapis.com/v2beta1/projects/project-name/agent/intents";

//const request = this.client.textRequest('hi', {sessionId: 'test'});

//readonly token = environment.dialogflow.angularBot;
//readonly client = new ApiAiClient({ accessToken: this.token });

 conversation = new BehaviorSubject<Message[]>([]);


  constructor(private http: HttpClient) { }


// public getResponse(query: string){
// 	let data = {
// 	query : query,
// 	lang: 'en',
// 	sessionId: '12345'
// 	}
// 	return this.http
// 	.post('${this.baseURL}', data, {headers: this.getHeaders()})
// 	.pipe(map(res => {return res}));
// }

// public getHeaders(){
// 	let headers = new HttpHeaders();
// 	headers.append('Authorization', 'Bearer ${this.token}');
// 	return headers;
// }

// public sendMessage(): void {
// 	this.message.timestamp = new Date();
// 	this.messages.push(this.message);
// 	this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
// 	this.messages.push(
// 	new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
// 		);

// 	});
// 	this.message = new Message('', 'assets/images/user.png');
// 	}

  //Sends and receives messages via DialogFlow

//const ApiAiClient = require('apiai')(token);


// request.on('response', (response) => {
//     const result = response.result.fulfillment.speech;
//     console.log(result);
// });

//request.on('error', error => console.log(error));
//request.end(); // This.


  converse(msg: string) {
   const userMessage = new Message(msg, 'user');
    this.update(userMessage);
 //    //console.log(this.client.textRequest);

 //    return this.client.textRequest(msg)
 //               .then(res => {
 //                  const speech = res.result.fulfillment.speech;
 //                  const botMessage = new Message(speech, 'bot');
 //                  this.update(botMessage);
 //               });
  }



  //Adds message to source
  update(msg: Message) {
   this.conversation.next([msg]);
 }
}

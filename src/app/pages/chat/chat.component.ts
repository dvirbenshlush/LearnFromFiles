import { Component, Signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FirestorageService } from '../../services/firestorage.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  messages: { content: string; sentByUser: boolean }[] = [];
  newMessage: string = '';
  form!: FormGroup;
  firstnameSignal: Signal<any> | undefined;

  constructor(private storeService: FirestorageService) {
  }
    
  ngOnInit() {
    // Simulate receiving initial messages
    this.receiveMessage('Hello there!', false);
    this.receiveMessage('How can I help you?', false);
    this.storeService.getMessages();
  }

  
  sendMessage() {
    console.log(this.newMessage)
    this.receiveMessage(this.newMessage, false)
    this.storeService.createMessage(this.newMessage);
    this.simulateReceivedMessage();
  }
  receiveMessage(content: string, sentByUser: boolean) {
    this.messages.push({ content, sentByUser });
  }

  simulateReceivedMessage() {
    // Simulate a received message after a short delay
    setTimeout(() => {
      this.receiveMessage('I received your message!', false);
    }, 2000);
  }

  onSubmit() {

  }
}



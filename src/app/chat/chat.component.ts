import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  messages: { content: string; sentByUser: boolean }[] = [];
  newMessage: string = '';
  form!: FormGroup;

  ngOnInit() {
    // Simulate receiving initial messages
    this.receiveMessage('Hello there!', false);
    this.receiveMessage('How can I help you?', false);
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ content: this.newMessage, sentByUser: true });
      this.newMessage = '';
      // Simulate sending a message (you can replace this with actual API calls)
      this.receiveMessage('How can I help you?', false);
      this.simulateReceivedMessage();
    }
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

}

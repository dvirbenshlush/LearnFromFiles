import { Component, Signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { debounceTime, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

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

  constructor(private fb: FormBuilder) {
    // this.form = this.fb.group({
    //   newMessage: new FormControl('', Validators.required),
    // });
    // this.firstnameSignal = toSignal(
    //   this.form.get('firstname')?.valueChanges.pipe(debounceTime(300)) ??
    //     of(null),
    //   {}
    // );
  }
    
  ngOnInit() {
    // Simulate receiving initial messages
    this.receiveMessage('Hello there!', false);
    this.receiveMessage('How can I help you?', false);
  }

  
  sendMessage() {
    console.log(this.newMessage)
    this.receiveMessage(this.newMessage, false)
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



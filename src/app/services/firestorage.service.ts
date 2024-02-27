import { Injectable } from '@angular/core';
import { Database, Query, getDatabase } from '@angular/fire/database'
import 'firebase/database';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
  
  constructor() {}
 
  // Get a list of messages from your database
  async getMessages() {
    const citiesCol = collection(this.db, '/chat-ai');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => {
      doc.data()
    });

    return cityList;
  }

  async createMessage(newMessage: string) {
    addDoc(collection(this.db, '/chat-ai'),{
      date: '',
      messages: [newMessage],
      senderType: 'customer',
      subject: 'test'
    })
  }

}

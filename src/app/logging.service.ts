import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  messages: string[] = []; // mesajları dizisi

  add(message: string){ // mesaj ekle fonksiyonu
    this.messages.push(message);
  }

  clear() { // mesaj sil fonksiyonu
    this.messages = [];
  }

  constructor() { }
}

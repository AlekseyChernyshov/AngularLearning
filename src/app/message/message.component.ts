import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgFor],
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  constructor(public messageService: MessageService) {}
}

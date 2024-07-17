import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {

  public email: string = '';   
  public emailCorrectFormat = true;
  public isInputActive = false;

  constructor() {}

  onInputChange() {
    this.emailCorrectFormat = this.email === '' ? true : this.isEmailValid() ;
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  activeInput() {
    this.isInputActive = true;
  }
}

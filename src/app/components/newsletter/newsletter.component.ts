import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {

  public email: string = '';
  public emailCorrectFormat = true;
  public isInputActive = false;

  constructor(private http: HttpClient) { }

  onInputChange() {
    this.emailCorrectFormat = this.email === '' ? true : this.isEmailValid();
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  activeInput() {
    this.isInputActive = true;
  }

  sendEmail() {
    if (this.emailCorrectFormat && this.email != '') {
      const formData = new FormData();
      formData.append('to', this.email);

      this.http.post('https://sua-aplicacao-no-railway.railway.app/sendEmail', formData, {responseType: "text"})
        .subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) => {
            console.error('Erro ao enviar o email', error);
          }
        });

    } else {
      console.error('Formato de email inválido');
    }
  }
}

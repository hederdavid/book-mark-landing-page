import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatProgressSpinnerModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  public email: string = '';
  public emailCorrectFormat = true;
  public isInputActive = false;
  public emailEnviado: boolean | null = null;
  public botaoClicado: boolean = false;

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
      this.botaoClicado = true;

      this.http.post('https://api-sendemail-bookmark-production.up.railway.app/sendEmail', formData, { responseType: 'text' })
        .subscribe({
          next: (response) => {
            this.botaoClicado = false;
            this.emailEnviado = true;
            this.waitAndResetButton();
            console.log(response);
          },
          error: (error) => {
            console.error('Erro ao enviar o email', error);
            this.botaoClicado = false;
            this.waitAndResetButton();
            this.emailEnviado = false;
          }
        });

    } else {
      console.error('Formato de email inválido');
    }
  }

  waitAndResetButton() {
    setTimeout(() => {
      this.emailEnviado = null;
    }, 3000); // Aguarda 3 segundos (3000 milissegundos)
  }
}

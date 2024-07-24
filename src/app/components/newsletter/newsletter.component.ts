import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
  public emailEnviado: boolean = true;
  public mensagemDeResposta: string = this.email ? "Email recebido! Logo mais entraremos em contado." : "Houve um erro ao receber seu email... Tente novamente."
  public botaoClicado: boolean = true;

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

      this.http.post('https://api-sendemail-bookmark-production.up.railway.app/sendEmail', formData, {responseType: "text"})
        .subscribe({
          next: async (response) => {
            this.botaoClicado = true;
            this.emailEnviado = true;
            await this.sleep(3000) 
            this.botaoClicado = false;
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

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-download-extension',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-extension.component.html',
  styleUrl: './download-extension.component.scss'
})
export class DownloadExtensionComponent {

  public arrayCards = signal([
    {
      id: 1,
      img: 'assets/images/logo-chrome.svg',
      alt: 'Logo Google',
      name: 'Chrome',
      version: '62'
    },

    {
      id: 2,
      img: 'assets/images/logo-firefox.svg',
      alt: 'Logo Firefox',
      name: 'Firefox',
      version: '55'
    },

    {
      id: 3,
      img: 'assets/images/logo-opera.svg',
      alt: 'Logo Opera',
      name: 'Opera',
      version: '46'
    },

  ])

}

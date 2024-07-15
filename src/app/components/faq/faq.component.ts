import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  readonly panelOpenState = signal(false)
  public arrayFaqs = signal([
    {
      tittle: 'What is Bookmark?',
      text: 'Bookmark is a feature that allows users to save and organize links to their favorite websites. It helps users easily access and manage their preferred online content by storing the URLs in a structured and accessible manner.',
    },

    {
      tittle: 'How can I request a new browser?',
      text: 'To request support for a new browser, please contact our support team via email or through our help center. Provide details about the browser you wish to see supported, and our team will review your request. We aim to expand compatibility based on user feedback and demand.'
    },

    {
      tittle: 'Is there a mobile app?',
      text: 'Yes, we have a mobile app available for both iOS and Android platforms. The app allows users to sync their bookmarks across devices, ensuring that their favorite websites are always accessible, whether on a desktop or mobile device.'
    },

    {
      tittle: 'What about other Chromium browsers?',
      text: 'Our bookmark manager is compatible with most Chromium-based browsers, including Google Chrome, Microsoft Edge, and Opera. We strive to support as many browsers as possible to provide a seamless experience for all users.'
    }
  ])

}

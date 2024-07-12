import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  selectedOption: string = 'bookmarking';
  selectedImage: string = 'assets/images/illustration-features-tab-1.svg';
  selectedTitle: string = 'Bookmark in one click'
  selectedText: string = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';

  selectOption(option: string) {
    this.selectedOption = option;

    switch (option) {
      case 'bookmarking':
        this.selectedImage = 'assets/images/illustration-features-tab-1.svg';
        this.selectedTitle = 'Bookmark in one click'
        this.selectedText = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
        break;
      case 'searching':
        this.selectedImage = 'assets/images/illustration-features-tab-2.svg';
        this.selectedTitle = 'Intelligent search'
        this.selectedText = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';
        break;
      case 'sharing':
        this.selectedImage = 'assets/images/illustration-features-tab-3.svg';
        this.selectedTitle = 'Share your bookmarks'
        this.selectedText = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
        break;
    }
  }
}

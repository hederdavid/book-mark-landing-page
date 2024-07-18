import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { DownloadExtensionComponent } from '../../components/download-extension/download-extension.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MobileMenuComponent } from "../../components/mobile-menu/mobile-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, FeaturesComponent, DownloadExtensionComponent, FaqComponent, NewsletterComponent, FooterComponent, MobileMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

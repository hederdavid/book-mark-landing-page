import { Component } from '@angular/core';
import { OpenCloseMenuService } from '../../services/open-close-menu.service';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {

  isOpen = false;

  constructor(private menuService: OpenCloseMenuService) {}

  ngOnInit(): void {
    this.menuService.menuOpen$.subscribe(open => {
      this.isOpen = open;
    });
  }

  closeMenu(): void {
    this.menuService.toggleMenu(false);
  }

}

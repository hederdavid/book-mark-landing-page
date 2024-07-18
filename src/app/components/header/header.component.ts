import { Component } from '@angular/core';
import { OpenCloseMenuService } from '../../services/open-close-menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public isClosed: boolean = true

  constructor(private menuService: OpenCloseMenuService) {}

  ngOnInit(): void {
    this.menuService.menuOpen$.subscribe(closed => {
      this.isClosed = closed;
    });
  }

  openMenu(): void {
    this.menuService.toggleMenu(true);
    this.isClosed = true
  }

}

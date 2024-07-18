import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenCloseMenuService {

  private menuOpenSubject = new BehaviorSubject<boolean>(false);
  menuOpen$ = this.menuOpenSubject.asObservable();

  constructor() {}

  toggleMenu(open: boolean): void {
    this.menuOpenSubject.next(open);
  }
}

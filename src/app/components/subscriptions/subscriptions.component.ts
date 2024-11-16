import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.css'
})
export class SubscriptionsComponent {
  lastScrollTop: number = 0;
  isNavbarVisible: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scroll hacia abajo
      this.isNavbarVisible = false;
    } else {
      // Scroll hacia arriba
      this.isNavbarVisible = true;
    }

    this.lastScrollTop = scrollTop;
  }
}

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

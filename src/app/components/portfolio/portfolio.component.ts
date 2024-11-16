import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  userName = "Juan Pérez";
  userAvatar = "https://images.unsplash.com/photo-1619037961390-f2047d89bc55?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyNHx8ZGlnaXRhbCUyMGhlYWx0aHxlbnwwfHx8fDE3MjQ1MzQ2NDB8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=48&h=48";
  testimonialText = "Cemedicar ha transformado mi experiencia de salud, facilitando consultas médicas desde la comodidad de mi hogar.";
  backgroundImage = "https://images.unsplash.com/photo-1619037961428-e6410a7afd38?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMnx8ZGlnaXRhbCUyMGhlYWx0aHxlbnwwfHx8fDE3MjQ1MzQ2NDB8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=861&h=653";

  images = [
    { src: 'https://images.unsplash.com/photo-1615486511262-c7b5c7f42b14?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNHx8ZGlnaXRhbCUyMGhlYWx0aHxlbnwwfHx8fDE3MjQ1MzQ2NDB8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=396', alt: 'Digital health device' },
    { src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzMHx8ZGlnaXRhbCUyMGhlYWx0aHxlbnwwfHx8fDE3MjQ1MzQ2NDB8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=396', alt: 'Medical technology' },
    { src: 'https://images.unsplash.com/photo-1628313348704-7f197d3dceb8?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHxkaWdpdGFsJTIwaGVhbHRofGVufDB8fHx8MTcyNDUzNDY0MHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=396', alt: 'Laboratory research' },
    { src: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyMHx8ZGlnaXRhbCUyMGhlYWx0aHxlbnwwfHx8fDE3MjQ1MzQ2NDB8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=396', alt: 'Health monitoring device' },
    { src: 'https://images.unsplash.com/photo-1656331797721-b593b8f00297?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMXx8ZGlnaXRhbCUyMGhlYWx0aHxlbnwwfHx8fDE3MjQ1MzQ2NDB8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=396', alt: 'Digital health analysis' },
    { src: 'https://images.unsplash.com/photo-1569396116180-210c182bedb8?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxkaWdpdGFsJTIwaGVhbHRofGVufDB8fHx8MTcyNDUzNDY0MHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=396', alt: 'Heart health monitoring' }
  ];

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

import { Component, signal, inject, afterNextRender, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothScrollService } from '../../core/services/smooth-scroll.service';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnDestroy {
  private smoothScrollService = inject(SmoothScrollService);
  private ngZone = inject(NgZone);

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  activeSection = signal('hero');

  navLinks = [
    { label: 'About', target: '#about' },
    { label: 'Projects', target: '#projects' },
    { label: 'Skills', target: '#skills' },
    { label: 'Experience', target: '#experience' },
    { label: 'Contact', target: '#contact' }
  ];


  private scrollListener!: () => void;
  private observer: IntersectionObserver | null = null;

  constructor() {
    this.scrollListener = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== this.isScrolled()) {
        this.ngZone.run(() => {
          this.isScrolled.set(scrolled);
        });
      }
    };

    afterNextRender(() => {
      this.ngZone.runOutsideAngular(() => {
        window.addEventListener('scroll', this.scrollListener, { passive: true });
        this.scrollListener();

        const options = {
          root: null,
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0
        };

        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.ngZone.run(() => {
                this.activeSection.set(entry.target.id);
              });
            }
          });
        }, options);

        document.querySelectorAll('section[id]').forEach(section => {
          this.observer?.observe(section);
        });
        
        const hero = document.getElementById('hero');
        if (hero) this.observer?.observe(hero);
      });
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  scrollToSection(target: string) {
    this.smoothScrollService.scrollTo(target);
    if (this.isMobileMenuOpen()) {
      setTimeout(() => {
        this.closeMobileMenu();
      }, 150);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.scrollListener);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

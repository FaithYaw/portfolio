import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  
  private themeSignal = signal<Theme>('light');
  public isDark = computed(() => this.themeSignal() === 'dark');
  public isDarkTheme = this.isDark;


  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        this.themeSignal.set(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.themeSignal.set('dark');
      }

      effect(() => {
        const currentTheme = this.themeSignal();
        if (currentTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', currentTheme);
      });
    }
  }

  toggleTheme(): void {
    this.themeSignal.update(theme => theme === 'light' ? 'dark' : 'light');
  }
}

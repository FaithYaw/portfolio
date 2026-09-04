import { Injectable, NgZone, afterNextRender, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  private ngZone = inject(NgZone);
  private lenis?: Lenis;

  constructor() {
    afterNextRender(() => {
      this.ngZone.runOutsideAngular(() => {
        this.initLenisAndGsap();
      });
    });
  }

  private initLenisAndGsap(): void {
    gsap.registerPlugin(ScrollTrigger);

    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    this.lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      this.lenis?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  scrollTo(target: string | HTMLElement): void {
    this.ngZone.runOutsideAngular(() => {
      if (typeof target === 'string') {
        const selector = target.startsWith('#') || target.startsWith('.') ? target : `#${target}`;
        const el = document.querySelector(selector) as HTMLElement;
        if (el) {
          if (this.lenis) {
            this.lenis.scrollTo(el);
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else if (target) {
        if (this.lenis) {
          this.lenis.scrollTo(target);
        } else {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  destroy(): void {
    this.ngZone.runOutsideAngular(() => {
      this.lenis?.destroy();
      this.lenis = undefined;
    });
  }
}


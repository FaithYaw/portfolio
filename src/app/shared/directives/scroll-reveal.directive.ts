import { Directive, ElementRef, Renderer2, afterNextRender, inject, input, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnDestroy {
  private element = inject(ElementRef);
  private renderer = inject(Renderer2);
  
  appScrollRevealDelay = input<number>(0);
  appScrollRevealType = input<'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in'>('fade-up');

  private tween?: gsap.core.Tween;

  constructor() {
    this.renderer.setStyle(this.element.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.element.nativeElement, 'will-change', 'transform, opacity, filter');

    afterNextRender(() => {
      gsap.registerPlugin(ScrollTrigger);

      const delaySec = (this.appScrollRevealDelay() || 0) / 1000;
      const type = this.appScrollRevealType();
      const el = this.element.nativeElement;

      const fromState = {
        opacity: 0,
        y: type === 'fade-up' ? 55 : 0,
        x: type === 'slide-left' ? -60 : type === 'slide-right' ? 60 : 0,
        scale: type === 'zoom-in' ? 0.85 : 1,
        filter: 'blur(8px)'
      };

      this.tween = gsap.fromTo(
        el,
        fromState,
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1,
          delay: delaySec,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
            onEnter: () => {
              this.renderer.addClass(el, 'is-visible');
            }
          }
        }
      );
    });
  }

  ngOnDestroy() {
    if (this.tween) {
      this.tween.kill();
    }
  }
}



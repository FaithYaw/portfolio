import { Component, ElementRef, afterNextRender, inject, OnDestroy } from '@angular/core';
import { PERSONAL_INFO } from '../../core/data/portfolio.data';
import { SmoothScrollService } from '../../core/services/smooth-scroll.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnDestroy {
  personalInfo = PERSONAL_INFO;
  private scrollService = inject(SmoothScrollService);
  private elementRef = inject(ElementRef);
  private ctx!: gsap.Context;

  constructor() {
    afterNextRender(() => {
      this.ctx = gsap.context(() => {
        gsap.from('.hero__animate', {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }, this.elementRef.nativeElement);
    });
  }

  scrollTo(target: string): void {
    this.scrollService.scrollTo(target);
  }

  ngOnDestroy(): void {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}

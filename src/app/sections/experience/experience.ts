import { Component, ElementRef, afterNextRender, inject, OnDestroy } from '@angular/core';
import { EXPERIENCES } from '../../core/data/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent implements OnDestroy {
  experiences = EXPERIENCES;
  private elementRef = inject(ElementRef);
  private ctx!: gsap.Context;

  constructor() {
    afterNextRender(() => {
      gsap.registerPlugin(ScrollTrigger);

      this.ctx = gsap.context(() => {
        const line = this.elementRef.nativeElement.querySelector('.timeline__line');
        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0, transformOrigin: 'top center' },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: '.timeline',
                start: 'top 75%',
                end: 'bottom 85%',
                scrub: 0.5
              }
            }
          );
        }
      }, this.elementRef.nativeElement);
    });
  }

  ngOnDestroy() {
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}


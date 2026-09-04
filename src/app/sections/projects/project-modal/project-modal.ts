import { Component, input, output, HostListener, afterNextRender, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';
import { Project } from '../../../core/data/portfolio.data';
import { gsap } from 'gsap';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss'
})
export class ProjectModalComponent implements OnInit, OnDestroy {
  project = input.required<Project>();
  closeModal = output<void>();
  
  private elementRef = inject(ElementRef);
  private ctx!: gsap.Context;

  @HostListener('document:keydown.escape')
  onEscape() {
    this.close();
  }

  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  constructor() {
    afterNextRender(() => {
      this.ctx = gsap.context(() => {
        gsap.from('.modal', {
          scale: 0.95,
          opacity: 0,
          duration: 0.4,
          ease: 'power3.out'
        });
        
        gsap.from('.modal__animate', {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.1
        });
      }, this.elementRef.nativeElement);
    });
  }

  close() {
    this.closeModal.emit();
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}

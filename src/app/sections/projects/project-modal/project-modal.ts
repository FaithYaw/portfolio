import { Component, input, output, HostListener, afterNextRender, ElementRef, inject, OnDestroy, OnInit, effect } from '@angular/core';
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
  videoLoading = false;
  
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
    effect(() => {
      const project = this.project();
      this.videoLoading = !!project?.videoUrl;
    });

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

  onVideoCanPlay() {
    this.videoLoading = false;
  }

  onVideoLoadStart() {
    this.videoLoading = true;
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

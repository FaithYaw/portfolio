import { Directive, ElementRef, NgZone, OnDestroy, Renderer2, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[appMagnetic]',
  standalone: true
})
export class MagneticDirective implements OnDestroy {
  private element = inject(ElementRef);
  private renderer = inject(Renderer2);
  private ngZone = inject(NgZone);
  
  private mouseMoveListener?: () => void;
  private mouseLeaveListener?: () => void;

  constructor() {
    afterNextRender(() => {
      this.ngZone.runOutsideAngular(() => {
        const el = this.element.nativeElement;
        
        this.renderer.setStyle(el, 'transition', 'transform 0.3s ease-out');

        this.mouseMoveListener = this.renderer.listen(el, 'mousemove', (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          const x = (e.clientX - centerX) * 0.3;
          const y = (e.clientY - centerY) * 0.3;
          
          this.renderer.setStyle(el, 'transition', 'none');
          this.renderer.setStyle(el, 'transform', `translate(${x}px, ${y}px)`);
        });

        this.mouseLeaveListener = this.renderer.listen(el, 'mouseleave', () => {
          this.renderer.setStyle(el, 'transition', 'transform 0.3s ease-out');
          this.renderer.setStyle(el, 'transform', 'translate(0, 0)');
        });
      });
    });
  }

  ngOnDestroy(): void {
    if (this.mouseMoveListener) {
      this.mouseMoveListener();
    }
    if (this.mouseLeaveListener) {
      this.mouseLeaveListener();
    }
  }
}

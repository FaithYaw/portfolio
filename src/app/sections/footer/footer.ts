import { Component, inject } from '@angular/core';
import { PERSONAL_INFO } from '../../core/data/portfolio.data';
import { SmoothScrollService } from '../../core/services/smooth-scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  personalInfo = PERSONAL_INFO;
  currentYear = new Date().getFullYear();
  private scrollService = inject(SmoothScrollService);

  scrollToTop(): void {
    this.scrollService.scrollTo('#hero');
  }
}

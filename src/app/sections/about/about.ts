import { Component } from '@angular/core';
import { PERSONAL_INFO, STATS } from '../../core/data/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  personalInfo = PERSONAL_INFO;
  stats = STATS;
}

import { Component } from '@angular/core';
import { OUTSIDE_INTERESTS } from '../../core/data/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-outside',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './outside.html',
  styleUrl: './outside.scss'
})
export class OutsideComponent {
  interests = OUTSIDE_INTERESTS;
}

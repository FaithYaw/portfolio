import { Component } from '@angular/core';
import { PERSONAL_INFO } from '../../core/data/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective, MagneticDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  personalInfo = PERSONAL_INFO;
}


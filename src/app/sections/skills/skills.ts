import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../core/data/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  categories = SKILL_CATEGORIES;
}

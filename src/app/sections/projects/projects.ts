import { Component, signal } from '@angular/core';
import { PROJECTS, Project } from '../../core/data/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ProjectModalComponent } from './project-modal/project-modal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective, ProjectModalComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
  selectedProject = signal<Project | null>(null);

  openModal(project: Project): void {
    this.selectedProject.set(project);
  }

  closeModal(): void {
    this.selectedProject.set(null);
  }
}

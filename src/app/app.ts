import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar';
import { HeroComponent } from './sections/hero/hero';
import { AboutComponent } from './sections/about/about';
import { ProjectsComponent } from './sections/projects/projects';
import { SkillsComponent } from './sections/skills/skills';
import { ExperienceComponent } from './sections/experience/experience';
import { ContactComponent } from './sections/contact/contact';
import { FooterComponent } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}


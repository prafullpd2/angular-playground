import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapfp';
}

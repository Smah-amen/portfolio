import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
// import { SectionComponent } from './section/section.component';
import { SectionComponent } from './section/section.component';
import { AboutComponent } from './about/about.component';
import { PrtofolioComponent } from './prtofolio/prtofolio.component';
import { FooterComponent } from './footer/footer.component';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgbPaginationModule, NgbAlertModule , SectionComponent, AboutComponent, PrtofolioComponent,FooterComponent,SkillComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}

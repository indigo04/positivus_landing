import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdvertisementComponent } from "./advertisement/advertisement.component";
import { ServicesComponent } from "./services/services.component";
import { PromoComponent } from "./promo/promo.component";
import { StudiesComponent } from "./studies/studies.component";
import { ProcessComponent } from "./process/process.component";
import { TeamComponent } from "./team/team.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AdvertisementComponent, ServicesComponent, PromoComponent, StudiesComponent, ProcessComponent, TeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

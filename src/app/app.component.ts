import {Component} from '@angular/core';
import {FooterComponent} from './htmlStructure/footer/footer.component';
import {RouterOutlet} from '@angular/router';
import {NavigationComponent} from './htmlStructure/navigation/navigation.component';
import {HeaderComponent} from './htmlStructure/header/header.component';
import {DbStorePageComponent} from "./pages/_Store/db-store-page/db-store-page.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.svg',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [HeaderComponent, NavigationComponent, RouterOutlet, FooterComponent, DbStorePageComponent]
})


// @Injectable({ providedIn: 'root' })
export class AppComponent {
  public title: string = 'JGLib24';

  constructor() {
  }

  ngOnInit() {
  }

}


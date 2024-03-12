import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {HomeComponent} from "./home/home.component";


const routes = []

@NgModule({
  exports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,

  ]
})
export class htmlStructureModule {
}

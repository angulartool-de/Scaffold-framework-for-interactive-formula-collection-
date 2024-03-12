import {enableProdMode, importProvidersFrom} from '@angular/core';


import {environment} from './environments/environment';
import {AppComponent} from './app/app.component';
import {GeometrischeFormenModule} from 'src/app/pages/geometrischeFormen/geometrischeFormen.module';
import {BiegebalkenModule} from 'src/app/pages/biegebalken/biegebalken.module';
import {htmlStructureModule} from 'src/app/htmlStructure/htmlStructure.module';
import {AppRoutingModule} from './app/app-routing.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, htmlStructureModule, BiegebalkenModule, GeometrischeFormenModule),

  ]
}).catch(err => console.error(err));

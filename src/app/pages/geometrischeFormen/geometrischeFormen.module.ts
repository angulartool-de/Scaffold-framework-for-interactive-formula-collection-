import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuflagerKraft4Pt} from "./_components/Auflagerkraefte4Punkt/AuflagerKraft4Pt.Component";
import {CenterOfGrafityComponent} from "./_components/CenterOfGrafity/CenterOfGrafity.component";

const routes = [
  {
    path: 'SchwerpunktVerschiebung',
    component: AuflagerKraft4Pt,
  },
  {
    path: 'VolumenGesamtSchwerpunkt',
    component: CenterOfGrafityComponent,
  },


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
})
export class GeometrischeFormenModule {
}

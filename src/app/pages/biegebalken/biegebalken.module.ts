import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {EulerComponent} from "src/app/pages/biegebalken/_components/euler/euler.component";


const routes = [

  {
    path: "Euler",
    component:
    EulerComponent
  }

];

@NgModule({
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    EulerComponent
  ]
})
export class BiegebalkenModule {
}

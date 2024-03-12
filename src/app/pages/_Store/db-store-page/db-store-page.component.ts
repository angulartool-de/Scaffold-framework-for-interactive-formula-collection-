import {Component} from '@angular/core';
import {DecimalPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {jgInputRestrictionDirective} from "../../../shared/_directivesAsModule/InputRestriction.directive";
import {jgInputStringRestrictionDirective} from "../../../shared/_directivesAsModule/InputStringRestrictive.directive";
import {DbStoreService} from "../../../shared/_dbStore/db-store.service";
import {VariableUnitBuilder} from "../../../shared/_classes/VariableUnitBuilder";

@Component({
  selector: 'jg-db-store-page',
  standalone: true,
  imports: [
    DecimalPipe,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    jgInputRestrictionDirective,
    jgInputStringRestrictionDirective,
    JsonPipe
  ],
  templateUrl: './db-store-page.component.html',
  styleUrl: './db-store-page.component.sass'
})
export class DbStorePageComponent {

  public dbStoreList: VariableUnitBuilder[] = [];

  public dbStoreListPro: VariableUnitBuilder[] = [];


  constructor(
    private UpdatedB: DbStoreService,
  ) {
  }


  run() {

    this.dbStoreList = this.UpdatedB.GetStore()


    if (this.dbStoreList) {


      (this.dbStoreListPro = this.dbStoreList
      ).forEach(item => {
        if (typeof (
          item
        ) === "object") {
          for (let eigenschaft in item) {
            let itemStr = item.varName;
            this[itemStr][eigenschaft] = item[eigenschaft];
          }
        }
      });
    }


  }


}

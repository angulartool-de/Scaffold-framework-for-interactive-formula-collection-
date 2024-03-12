import {Injectable} from '@angular/core';
import {VariableUnitBuilder} from "../_classes/VariableUnitBuilder";

@Injectable({
  providedIn: 'root'
})
export class IndexUpdaterService {


  constructor() {
  }


  Update(variableObjList: VariableUnitBuilder[], Index: string) {


    variableObjList.forEach(
      Variable => Variable.subindex = Index
    )


  }


}

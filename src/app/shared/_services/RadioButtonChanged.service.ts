import {Injectable} from '@angular/core';
import {VariableUnitBuilder} from "src/app/shared/_classes/VariableUnitBuilder";
import {FxMathService} from "./FxMath.service";
import {CommonValuesService} from "./CommonValues.service";

@Injectable({
  providedIn: 'root'
})
export class RadioButtonChangedService {

  constructor(
    private FxMath: FxMathService,
    private CVari: CommonValuesService,
  ) {
  }


  public rb_change(
    obj: VariableUnitBuilder,
    variableList: VariableUnitBuilder[]) {

    const GroupIndex = obj.fixGroup

    obj.fixStatus = !obj.fixStatus;  // ACTION
    obj.fixStatus ? obj.fixLabelStr = obj.fixTrueLabel : obj.fixLabelStr = obj.fixFalseLabel;


    for (const item of variableList) {
      if (item.fixGroup == GroupIndex && item != obj) {
        item.fixStatus = false;  // ACTION
        item.fixLabelStr = item.fixFalseLabel;
      }
    }
  }


  public MultiFix_Change(obj: VariableUnitBuilder): void {

    obj.fixStatus = !obj.fixStatus;
    obj.fixStatus ? obj.fixLabelStr = obj.fixTrueLabel : obj.fixLabelStr = obj.fixFalseLabel;
    let ObjvarName = "get_" + obj.fixLabelStr
    obj.fixStatus ? this.FxMath.RPN(obj, this.CVari[ObjvarName]()) : this.FxMath.RPN(obj, this.CVari[ObjvarName]());
  }

  /*Block-Schaltung Teiln 2
   if (obj !== this.fixs && obj !== this.fixt) {
   this.fixs.STATUS = this.fixs.NameFalse; this.fixs.status = false;
   this.fixt.STATUS = this.fixt.NameFalse; this.fixt.status = false;
   }
   */


  public rb_changeSingleFix(
    obj: VariableUnitBuilder,
    variableList: VariableUnitBuilder[]) {

    const GroupIndex = obj.fixGroup

    if (obj.fixStatus != false) {
      obj.fixStatus = !obj.fixStatus;  // ACTION
      obj.fixStatus ? obj.fixLabelStr = obj.fixTrueLabel : obj.fixLabelStr = obj.fixFalseLabel;
    }

    for (const item of variableList) {
      if (item.fixGroup == GroupIndex && item != obj) {
        item.fixStatus = true;  // ACTION
        item.fixLabelStr = item.fixTrueLabel;
      }
    }
  }


}


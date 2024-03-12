import {Injectable} from '@angular/core';
import {VariableUnitBuilder} from "src/app/shared/_classes/VariableUnitBuilder";

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() {
  }

  validate(obj: VariableUnitBuilder): VariableUnitBuilder {


    obj.inputValue = parseFloat(obj.inputStr.replace(/,/, '.'));
    obj.nominalValue = obj.inputValue * obj.scaleSelect;
    obj.showValue = obj.nominalValue / obj.scaleSelect;
    obj.showStr = obj.showValue.toString()

    return obj;

  }

  UndoValues(obj: VariableUnitBuilder): VariableUnitBuilder {

    obj.inputStr = obj.nominalValueOld.toString();
    obj.inputValue = obj.nominalValueOld;
    obj.nominalValue = obj.nominalValueOld;

    obj.showStr = obj.nominalValueOld.toString();
    obj.showValue = obj.nominalValueOld;


    return obj;

  }

}

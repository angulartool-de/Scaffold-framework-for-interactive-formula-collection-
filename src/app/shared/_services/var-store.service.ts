import {Injectable} from '@angular/core';
import {VariableUnitBuilder} from "../_classes/VariableUnitBuilder";

@Injectable({
  providedIn: 'root'
})
export class VarStoreService {

  public varStore = new Map()

  constructor() {
  }


  public store(obj: VariableUnitBuilder): string {
    const keyStr = obj.varName.toString() + obj.subindex.toString() + obj.subtext.toString();
    this.varStore.set(keyStr, obj)
    return keyStr
  }
}



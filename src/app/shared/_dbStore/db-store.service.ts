import {Injectable} from '@angular/core';
import {VariableUnitBuilder} from "../_classes/VariableUnitBuilder";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DbStoreService {


  public dbStoreList: VariableUnitBuilder[] = [];


  constructor() {
  }


  UpdateStore(arr: VariableUnitBuilder[]) {
    this.dbStoreList.push(_.cloneDeep(arr));
  }


  GetStore() {
    return this.dbStoreList
  }

}

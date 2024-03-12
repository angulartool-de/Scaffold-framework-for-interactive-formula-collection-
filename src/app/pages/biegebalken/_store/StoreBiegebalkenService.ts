import {Injectable} from '@angular/core';
import {VariableUnitBuilder} from "src/app/shared/_classes/VariableUnitBuilder";
import * as _ from 'lodash';
import {DbStoreService} from "../../../shared/_dbStore/db-store.service";

@Injectable({
  providedIn: 'root'
})
export class StoreBiegebalkenService {

  public StoreKragarm: VariableUnitBuilder[] = undefined;
  public StoreKragarmDoppelseitig: VariableUnitBuilder[] = undefined;
  public StoreKragarmEinseitig: VariableUnitBuilder[] = undefined;
  public StoreKragarmMoment: VariableUnitBuilder[] = undefined;
  public StoreStuetzbalken: VariableUnitBuilder[] = undefined;
  public StoreStuetzbalkenDoppelseitig: VariableUnitBuilder[] = undefined;
  public StoreEuler: VariableUnitBuilder[] = undefined;
  4

  constructor(
    private UpdatedB: DbStoreService
  ) {
  }

  UpdateStoreKragarm(arr: VariableUnitBuilder[]) {
    this.StoreKragarm = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(_.cloneDeep(arr));
  }

  UpdateStoreKragarmDoppelseitig(arr: VariableUnitBuilder[]) {
    this.StoreKragarmDoppelseitig = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(_.cloneDeep(arr));
  }

  UpdateStoreKragarmEinseitig(arr: VariableUnitBuilder[]) {
    this.StoreKragarmEinseitig = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(_.cloneDeep(arr));
  }

  UpdateStoreKragarmMoment(arr: VariableUnitBuilder[]) {
    this.StoreKragarmMoment = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(_.cloneDeep(arr));
  }

  UpdateStoreStuetzbalken(arr: VariableUnitBuilder[]) {
    this.StoreStuetzbalken = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(_.cloneDeep(arr));
  }

  UpdateStoreStuetzbalkenDoppelseitig(arr: VariableUnitBuilder[]) {
    this.StoreStuetzbalkenDoppelseitig = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(_.cloneDeep(arr));
  }

  UpdateStoreEuler(arr: VariableUnitBuilder[]) {
    this.StoreEuler = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(_.cloneDeep(arr));
  }

}

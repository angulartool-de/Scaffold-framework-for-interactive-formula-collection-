import {Injectable} from "@angular/core";
import * as _ from "lodash";
import {VariableUnitBuilder} from "src/app/shared/_classes/VariableUnitBuilder";
import {DbStoreService} from "../../../shared/_dbStore/db-store.service";

@Injectable({
  providedIn: "root"
})
export class StoreGeometrischeFormenService {
  public StoreKreis: VariableUnitBuilder[];
  public StoreKreisSegmentRing: VariableUnitBuilder[];
  public StoreRechteck: VariableUnitBuilder[];
  public StoreUnsymetrischerKasten: VariableUnitBuilder[];
  public StoreUundT: VariableUnitBuilder[];
  public StoreDreieck: VariableUnitBuilder[];
  public Store4Strang: VariableUnitBuilder[];
  public Store2Strang: VariableUnitBuilder[];
  public VierKantHohlProfil: VariableUnitBuilder[];
  public CenterOfMasses: VariableUnitBuilder[];
  public AuflagerKraft4Pt: VariableUnitBuilder[];


  constructor(
    private UpdatedB: DbStoreService
  ) {
  }


  UpdateStoreKreis(arr) {
    this.StoreKreis = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }

  UpdateStoreKreisSegmentRing(arr) {
    this.StoreKreisSegmentRing = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }


  UpdateStoreRechteck(arr) {
    this.StoreRechteck = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }

  UpdateStoreUnsymetrischerKasten(arr) {
    this.StoreUnsymetrischerKasten = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }

  UpdateStoreUundT(arr) {
    this.StoreUundT = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }

  UpdateStoreDreieck(arr) {
    this.StoreDreieck = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }

  UpdateStore4Strang(arr) {
    this.Store4Strang = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }

  UpdateStore2Strang(arr) {
    this.Store2Strang = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }


  UpdateStoreVierKantHohlProfil(arr) {
    this.VierKantHohlProfil = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }


  UpdateStoreAuflagerKraft4Pt(arr) {
    this.AuflagerKraft4Pt = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }


  UpdateStoreCenterOfMasses(arr) {
    this.CenterOfMasses = _.cloneDeep(arr);
    this.UpdatedB.UpdateStore(arr);
  }


}





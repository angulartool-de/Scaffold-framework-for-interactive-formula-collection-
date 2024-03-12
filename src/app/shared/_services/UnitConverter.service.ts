import {Injectable} from '@angular/core';
import {VariableUnitBuilder} from "src/app/shared/_classes/VariableUnitBuilder";

@Injectable({
  providedIn: 'root'
})
export class UnitConverterService {

  public mmUnit = 1;
  public mm2Unit = 1;
  public mm3Unit = 1;
  public mm4Unit = 1;
  public cmUnit = 10;
  public cm2Unit = 10 * 10;
  public cm3Unit = 10 * 10 * 10;
  public cm4Unit = 10 * 10 * 10 * 10;
  public dmUnit = 100;
  public dm2Unit = 100 * 100;
  public dm3Unit = 100 * 100 * 100;
  public dm4Unit = 100 * 100 * 100 * 100;
  public mUnit = 1000;
  public m2Unit = 1000 * 1000;
  public m3Unit = 1000 * 1000 * 1000;
  public m4Unit = 1000 * 1000 * 1000 * 1000;

  constructor() {
  }


  public unitSwitch(obj: VariableUnitBuilder): VariableUnitBuilder {

    if (obj.unit === 'mm') {
      obj.unit = 'cm';
      obj.scaleSelect = this.cmUnit;

    } else if (obj.unit === 'cm') {
      obj.unit = 'dm';
      obj.scaleSelect = this.dmUnit;

    } else if (obj.unit === 'dm') {
      obj.unit = 'm';
      obj.scaleSelect = this.mUnit;

    } else if (obj.unit === 'm') {
      obj.unit = 'mm';
      obj.scaleSelect = this.mmUnit;


      // mm2

    } else if (obj.unit === 'mm²') {
      obj.unit = 'cm²';
      obj.scaleSelect = this.cm2Unit;

    } else if (obj.unit === 'cm²') {
      obj.unit = 'dm²';
      obj.scaleSelect = this.dm2Unit;

    } else if (obj.unit === 'dm²') {
      obj.unit = 'm²';
      obj.scaleSelect = this.m2Unit;

    } else if (obj.unit === 'm²') {
      obj.unit = 'mm²';
      obj.scaleSelect = 1 / this.mm2Unit;


      // mm3

    } else if (obj.unit === 'mm³') {
      obj.unit = 'cm³';
      obj.scaleSelect = this.cm3Unit;


    } else if (obj.unit === 'cm³') {
      obj.unit = 'dm³';
      obj.scaleSelect = this.dm3Unit;

    } else if (obj.unit === 'dm³') {
      obj.unit = 'm³';
      obj.scaleSelect = this.m3Unit;

    } else if (obj.unit === 'm³') {
      obj.unit = 'mm³';
      obj.scaleSelect = 1 / this.mm3Unit;


      // mm4

    } else if (obj.unit === 'mm⁴') {
      obj.unit = 'cm⁴';
      obj.scaleSelect = this.cm4Unit;

    } else if (obj.unit === 'cm⁴') {
      obj.unit = 'dm⁴';
      obj.scaleSelect = this.dm4Unit;

    } else if (obj.unit === 'dm⁴') {
      obj.unit = 'm⁴';
      obj.scaleSelect = this.m4Unit;

    } else if (obj.unit === 'm⁴') {
      obj.unit = 'mm⁴';
      obj.scaleSelect = this.mm4Unit;


      // N

    } else if (obj.unit === 'N') {
      obj.unit = 'dN';
      obj.scaleSelect = 10;

    } else if (obj.unit === 'dN') {
      obj.unit = 'kN';
      obj.scaleSelect = 1000;


    } else if (obj.unit === 'kN') {
      obj.unit = 'kg';
      obj.scaleSelect = 9.81;

    } else if (obj.unit === 'kg') {
      obj.unit = 't';
      obj.scaleSelect = 1000 * 9.81;

    } else if (obj.unit === 't') {
      obj.unit = 'N';
      obj.scaleSelect = 1;

      // Nmm


    } else if (obj.unit === 'Nmm') {
      obj.unit = 'Ncm';
      obj.scaleSelect = this.cmUnit;

    } else if (obj.unit === 'Ncm') {
      obj.unit = 'Ndm';
      obj.scaleSelect = this.dmUnit;

    } else if (obj.unit === 'Ndm') {
      obj.unit = 'Nm';
      obj.scaleSelect = this.mUnit;

    } else if (obj.unit === 'Nm') {
      obj.unit = 'Nmm';
      obj.scaleSelect = this.mmUnit;


      //  N/mm²

    } else if (obj.unit === 'N/mm²') {
      obj.unit = 'N/cm²';
      obj.scaleSelect = 1 / this.cm2Unit;

    } else if (obj.unit === 'N/cm²') {
      obj.unit = 'kN/cm²';
      obj.scaleSelect = 1 / this.cm2Unit * 1000;

    } else if (obj.unit === 'kN/cm²') {
      obj.unit = 'N/m²';
      obj.scaleSelect = 1 / this.m2Unit;

    } else if (obj.unit === 'N/m²') {
      obj.unit = 'N/mm²';
      obj.scaleSelect = 1 / this.mm2Unit; // HIER WIRD ZURÜCKGESETZT,DA AUS SELECTION NICHT GELESEN WIRD

      // m/s

    } else if (obj.unit === 'm/s') {
      obj.unit = 'km/h';
      obj.scaleSelect = 1 / 3.6;


    } else if (obj.unit === 'km/h') {
      obj.unit = 'm/min';
      obj.scaleSelect = 1 / 60;


    } else if (obj.unit === 'm/min') {
      obj.unit = 'mm/min';
      obj.scaleSelect = 1 / 60 / 1000;


    } else if (obj.unit === 'mm/min') {
      obj.unit = 'm/s';
      obj.scaleSelect = 1;


      // Zeit

    } else if (obj.unit === 's') {
      obj.unit = 'min';
      obj.scaleSelect = 60;


    } else if (obj.unit === 'min') {
      obj.unit = 'h';
      obj.scaleSelect = 3600;


    } else if (obj.unit === 'h') {
      obj.unit = 'days';
      obj.scaleSelect = (
        3600 * 24);


    } else if (obj.unit === 'days') {
      obj.unit = 's';
      obj.scaleSelect = 1;


      // Units OHNe Convertierung


    } else if (obj.unit === 'm/s²') {
      obj.unit = 'm/s²';
      obj.scaleSelect = 1; // HIER WIRD ZURÜCKGESETZT,DA AUS SELECTION NICHT GELESEN WIRD


    } else if (obj.unit === '°') {
      obj.unit = '°';
      obj.scaleSelect = 1; // HIER WIRD ZURÜCKGESETZT,DA AUS SELECTION NICHT GELESEN WIRD

    } else if (obj.unit === 'mA') {
      obj.unit = 'mA';
      obj.scaleSelect = 1; // HIER WIRD ZURÜCKGESETZT,DA AUS SELECTION NICHT GELESEN WIRD

    } else if (obj.unit === 'value' || obj.unit === 'Value') {
      obj.unit = 'value';
      obj.scaleSelect = 1; // HIER WIRD ZURÜCKGESETZT,DA AUS SELECTION NICHT GELESEN WIRD


    } else if (obj.unit === '+' || obj.unit === 'Value') {
      obj.unit = '+';
      obj.scaleSelect = 1; // HIER WIRD ZURÜCKGESETZT,DA AUS SELECTION NICHT GELESEN WIRD


    } else {
      obj.unit = 'kein';
      obj.scaleSelect = 1;

    }

    // this.nominalValue(obj);
    this.showValue(obj);
    return obj;

  }


  public nominalValue(obj: VariableUnitBuilder): VariableUnitBuilder {
    obj.nominalValue = obj.inputValue * obj.scaleSelect;
    obj.showValue = obj.nominalValue * obj.scaleSelect;
    obj.inputStr = (
      obj.nominalValue / obj.scaleSelect).toString();

    return obj;
  }

  public showValue(obj: VariableUnitBuilder): VariableUnitBuilder {
    obj.showValue = obj.nominalValue / obj.scaleSelect;
    obj.inputStr = (
      obj.nominalValue / obj.scaleSelect).toString();

    return obj;
  }

  public showValueResult(obj: VariableUnitBuilder, erg?: number): VariableUnitBuilder {

    if (erg) {
      obj.nominalValue = erg;
    }

    obj.showValue = obj.nominalValue / obj.scaleSelect;
    obj.inputStr = (
      obj.nominalValue / obj.scaleSelect).toString();


    return obj;
  }
}

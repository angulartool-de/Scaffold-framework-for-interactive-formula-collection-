import {IVariableUnitBuilder} from "src/app/shared/_classesIntefaces/IVariableUnitBuilder";

export class VariableUnitBuilder implements IVariableUnitBuilder {

  public varName: string = '';
  public varLabel: string = '';
  public varSymbol: string = '';

  public unitBase: string = '0';
  public unit: string = '0';
  public scaleSelect: number = 1;

  public inputStr: string = '0';
  public inputValue: number = 0;
  public nominalValue: number = 0;
  public ergebnis: boolean = false;
  public showStr: string = '0';
  public showValue: number = 0;
  public nominalValueOld: number = 0;

  public fixActiv: boolean = false;
  public fixGroup: string = '';
  public fixStatus: boolean = false;

  public fixLabelStr: string = '';
  public fixTrueLabel: string = 'fix';
  public fixFalseLabel: string = 'var';

  public selectBox: boolean = false;
  public inputValueString: number | string | (number | string)[] = ''

  public subindex: string = ''
  public subtext: string = ''

  public keyStr: string = ''
  public SelKeyStr: string [] = []

  public checkNumber = isNaN(this.showValue)

  constructor(varName: string, unit: string, inputValueString?: number | string | (number | string)[], varLabel?: string, varSymbol?: string, ergebnis?: boolean,
              fixGroup?: string, fixStatus?: boolean, fixTrueLabel?: string, fixFalseLabel?: string, selectBox?: boolean) {
    this.varName = varName;
    this.unit = unit;
    this.unitBase = unit;
    this.inputValueString = inputValueString;

    if (typeof (inputValueString) == "number") {
      this.inputStr = inputValueString.toString();
      this.nominalValue = inputValueString;
      this.showValue = inputValueString;
      this.showStr = this.inputStr;
      this.nominalValueOld = this.inputValue;

    }

    if (typeof (inputValueString) == "string") {
      this.nominalValue = 0;
      inputValueString ? this.inputStr = inputValueString.toString() : this.inputStr = '0';
      inputValueString ? this.showValue = this.nominalValue : this.showValue = 0;
      this.showStr = this.inputStr;
      this.nominalValueOld = 0;

    }


    try {
      if (inputValueString[1]) {

        this.nominalValue = parseFloat(inputValueString[0]);
        inputValueString ? this.inputStr = inputValueString[0].toString() : this.inputStr = '0';
        inputValueString ? this.showValue = this.nominalValue : this.showValue = 0;
        this.showStr = this.inputStr;
        this.nominalValueOld = 0;
        this.selectBox = true
      }
    } catch (e) {

    }


    varLabel ? this.varLabel = varLabel : this.varLabel = varName;
    varSymbol ? this.varSymbol = varSymbol : this.varSymbol = varName;
    ergebnis ? this.ergebnis = ergebnis : this.ergebnis = false;

    fixGroup ? this.fixGroup = fixGroup : this.fixGroup = '';
    fixStatus ? this.fixStatus = fixStatus : this.fixStatus = false;
    fixTrueLabel ? this.fixTrueLabel = fixTrueLabel : this.fixTrueLabel = 'fix';
    fixFalseLabel ? this.fixFalseLabel = fixFalseLabel : this.fixFalseLabel = 'var';

    this.fixStatus ? this.fixLabelStr = this.fixTrueLabel : this.fixLabelStr = this.fixFalseLabel;
    this.fixGroup == '' || this.ergebnis ? this.fixActiv = false : this.fixActiv = true;


  }


}

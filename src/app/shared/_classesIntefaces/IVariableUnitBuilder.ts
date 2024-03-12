export interface IVariableUnitBuilder {

  varName: string;
  varLabel: string;
  varSymbol: string;

  unitBase: string;
  unit: string;
  scaleSelect: number;

  inputStr: string;
  inputValue: number | string;
  nominalValue: number;
  ergebnis: boolean;
  showStr: string;
  showValue: number;
  nominalValueOld: number;

  fixActiv: boolean;
  fixStatus: boolean;

  fixLabelStr: string;
  fixTrueLabel: string;
  fixFalseLabel: string;

  fixGroup: string;

}


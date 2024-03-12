import {Injectable} from '@angular/core';
import {VariableUnitBuilder} from "src/app/shared/_classes/VariableUnitBuilder";
import {FxMathService} from "src/app/shared/_services/FxMath.service";

@Injectable({
  providedIn: 'root',
})
export class CommonValuesService {
  public F = new VariableUnitBuilder('F', 'N', 0, 'Kraft', 'F');

  public Wx = new VariableUnitBuilder(
    'Wx',
    'mm³',
    0,
    'Widerstandsmoment',
    'Wx'
  );
  public Wy = new VariableUnitBuilder(
    'Wy',
    'mm³',
    0,
    'Widerstandsmoment',
    'Wy'
  );
  public W = new VariableUnitBuilder('W', 'mm³', 0, 'Widerstandsmoment', 'W');

  public Ix = new VariableUnitBuilder(
    'Ix',
    'mm4',
    0,
    'Trägheitsmoment',
    'Ix'
  );
  public Iy = new VariableUnitBuilder(
    'Iy',
    'mm4',
    0,
    'Trägheitsmoment',
    'Iy'
  );


  public Traeger = {
    selectedType: '',
    selectedSize: 0,
    selectedHöhe: 0,
    selectedBreite: 0,
    selectedWy: 0,
    selectedIy: 0,
    selectedWz: 0,
    selectedIz: 0,
  };

  constructor(private FxMath: FxMathService) {
  }

  copy_F(obj: VariableUnitBuilder) {
    this.FxMath.RPN(this.F, obj.nominalValue);
  }

  get_F() {
    return this.F.nominalValue;
  }

  copy_Wx(obj: VariableUnitBuilder) {
    this.FxMath.RPN(this.Wx, obj.nominalValue);
  }

  copy_Wy(obj: VariableUnitBuilder) {
    this.FxMath.RPN(this.Wy, obj.nominalValue);
  }

  get_Wx() {
    return this.Wx.nominalValue;
  }

  get_Wy() {
    return this.Wy.nominalValue;
  }

  copy_Ix(obj: VariableUnitBuilder) {
    this.FxMath.RPN(this.Ix, obj.nominalValue);
  }

  copy_Iy(obj: VariableUnitBuilder) {
    this.FxMath.RPN(this.Iy, obj.nominalValue);
  }

  get_Ix() {
    return this.Ix.nominalValue;
  }

  get_Iy() {
    return this.Iy.nominalValue;
  }


}

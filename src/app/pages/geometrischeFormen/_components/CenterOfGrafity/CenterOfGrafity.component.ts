import {Component} from '@angular/core';
import {DecimalPipe, NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {
  jgInputStringRestrictionDirective
} from "../../../../shared/_directivesAsModule/InputStringRestrictive.directive";
import {jgInputRestrictionDirective} from "../../../../shared/_directivesAsModule/InputRestriction.directive";
import {VariableUnitBuilder} from "../../../../shared/_classes/VariableUnitBuilder";
import {UnitConverterService} from "../../../../shared/_services/UnitConverter.service";
import {ValidateService} from "../../../../shared/_services/Validate.service";
import {RadioButtonChangedService} from "../../../../shared/_services/RadioButtonChanged.service";
import {MaterialSelectionService} from "../../../../shared/_services/MaterialSelection.service";
import {FxMathService} from "../../../../shared/_services/FxMath.service";
import {CommonValuesService} from "../../../../shared/_services/CommonValues.service";
import {StoreGeometrischeFormenService} from "../../_store/StoreGeometrischeFormenService";
import {StoreInitService} from "../../../../shared/_services/StoreInit.service";
import {HtmlAddTextService} from "../../../../shared/_services/HtmlAddText.service";
import {Router} from "@angular/router";
import {IndexUpdaterService} from "../../../../shared/_services/IndexUpdater.service";
import {VarStoreService} from "../../../../shared/_services/var-store.service";

@Component({
  selector: 'jg-CenterOfGrafity',
  standalone: true,
  imports: [NgIf, FormsModule, jgInputStringRestrictionDirective, NgFor, jgInputRestrictionDirective, DecimalPipe],
  templateUrl: '../../../../htmlStructure/htmlBaseTemplate/TemplateVarlist.component.svg',
  styleUrl: './CenterOfGrafity.component.sass'
})
export class CenterOfGrafityComponent {
// ########## HTML Template Std-Variablen ##########
  public htmlButtonName: string = "Schwerpunkt + Schräglagen";
  public BerechnungsName: string = "";
  public jpgSource: string = "";
  public variableList: any = [];
  public variableObjList: VariableUnitBuilder[] = [];
  public visible: boolean = true;
  public visibleCalc: boolean = false;
  public VarObjList: any = {};
  public addHTML: string = '';

  public addHTMLerg: string = "";

// ZUsätzliche Variablen für HTML festlegen
  public Meldung: string = "";
  public Meldunga: string = "";

// @Input() visibleBiegebalken: boolean = true;


// ########## Variablen festlegen ##########


  public X1 = new VariableUnitBuilder('X1', 'mm', 0, 'Koordinate X1', 'X1');
  public Y1 = new VariableUnitBuilder('Y1', 'mm', 0, 'Koordinate Y1', 'Y1');
  public Z1 = new VariableUnitBuilder('Z1', 'mm', 0, 'Koordinate Z1', 'Z1');
  public m1 = new VariableUnitBuilder('m1', 'kg', 0, 'Gewicht 1', 'm1');

  public X2 = new VariableUnitBuilder('X2', 'mm', 0, 'Koordinate X2', 'X2');
  public Y2 = new VariableUnitBuilder('Y2', 'mm', 0, 'Koordinate Y2', 'Y2');
  public Z2 = new VariableUnitBuilder('Z2', 'mm', 0, 'Koordinate Z2', 'Z2');
  public m2 = new VariableUnitBuilder('m2', 'kg', 0, 'Gewicht 1', 'm2');

  public XSg = new VariableUnitBuilder('XSg', 'mm', 0, 'Koordinate X', 'Xges', true);
  public YSg = new VariableUnitBuilder('YSg', 'mm', 0, 'Koordinate Y', 'Yges', true);
  public ZSg = new VariableUnitBuilder('ZSg', 'mm', 0, 'Koordinate Z', 'Zges', true);
  public mSg = new VariableUnitBuilder('mSg', 'kg', 0, 'Gesamt Gewicht', 'm ges', true);

  public wXSg = new VariableUnitBuilder('wXSg', '°', 0, 'Winkel in X-Z Ebene', 'Xges', true);
  public wYSg = new VariableUnitBuilder('wYSg', '°', 0, 'Winkel in Y-Z Ebene', 'Yges', true);
  public wZSg = new VariableUnitBuilder('wZSg', '°', 0, 'max. Winkel von Z Achse', 'Zges', true);

  public Btn = new VariableUnitBuilder('Btn', '', '', 'Result Values To X1,Y1,Z1,m1', '-', false, 'a', true, 'ja', 'ja');


//
  public subindex: string = ''
  protected readonly isNaN = isNaN;
  protected readonly String = String;
  private Matlist = this.Emod.matList;
  public inputMat = new VariableUnitBuilder('inputMat', '', this.Matlist, 'Material', '-', false)

  constructor(
    private UnitConvert: UnitConverterService,
    private Validate: ValidateService,
    private rbChanged: RadioButtonChangedService,
    private Emod: MaterialSelectionService,
    private FxMath: FxMathService,
    private CVari: CommonValuesService,
    private Store: StoreGeometrischeFormenService,
    private StoreInit: StoreInitService,
    public HtmlAddText: HtmlAddTextService,
    private router: Router,
    private IndexUpdater: IndexUpdaterService,
    private varstore: VarStoreService
  ) {
  }

  IndexUdate() {
    this.IndexUpdater.Update(this.variableObjList, this.subindex)


  }

  ngOnInit(): void {

    /*Erstellen des Html mit der Variablenreihenfolge und Trennzeichen*/

    this.variableList.push(
      this.X1,
      this.Y1,
      this.Z1,
      this.m1,
      "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      this.X2,
      this.Y2,
      this.Z2,
      this.m2,
      "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",

      this.XSg,
      this.YSg,
      this.ZSg,
      this.mSg,
      'br',
      this.wXSg,
      this.wYSg,
      this.wZSg,

      "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      this.Btn,
    );


    (
      this.variableList
    ).forEach(item => {
      if (typeof (
        item
      ) === "object") {
        this.variableObjList.push(item);      // return Liste
      }
    });


    if (this.Store.CenterOfMasses) {
      (
        this.Store.CenterOfMasses
      ).forEach(item => {
        if (typeof (
          item
        ) === "object") {
          for (let eigenschaft in item) {
            let itemStr = item.varName;
            this[itemStr][eigenschaft] = item[eigenschaft];
          }
        }
      });
    }
  }

  VarStore(obj: VariableUnitBuilder) {
    obj.keyStr = this.varstore.store(obj);
    obj.SelKeyStr.push(obj.keyStr)

  }


  validate(obj: VariableUnitBuilder): void {
    this.Validate.validate(obj);
  }

  unitSwitch(obj: VariableUnitBuilder): void {
    this.UnitConvert.unitSwitch(obj);
  }

  fix_change(obj: VariableUnitBuilder): void {
    this.rbChanged.rb_change(obj, this.variableList);

    this.FxMath.RPN(this.X1, this.XSg);
    this.FxMath.RPN(this.Y1, this.YSg);
    this.FxMath.RPN(this.Z1, this.ZSg);
    this.FxMath.RPN(this.m1, this.mSg);

    this.calc();
  }

  keyup(obj: VariableUnitBuilder): void {
    this.validate(obj);
    // const FunctionCall: string = 'keyup_' + obj.varName;
    // // const Vari: string = obj.varName;
    //
    // try {
    //   // @ts-ignore
    //   this[FunctionCall](obj);
    //   this.Meldung = FunctionCall;
    // } catch (e) {
    //   // @ts-ignore
    //   this.Meldung = e.toString();
    //  }
    this.calc()

  }


  calc() {

    this.FxMath.RPN(this.mSg,
      this.m1, this.m2, '+');


    this.FxMath.RPN(this.XSg,
      this.m1,
      this.X1,
      '*',
      this.m2,
      this.X2,
      '*',
      '+',
      this.mSg,
      '/',
    );

    this.FxMath.RPN(this.YSg,
      this.m1,
      this.Y1,
      '*',
      this.m2,
      this.Y2,
      '*',
      '+',
      this.mSg,
      '/',
    );

    this.FxMath.RPN(this.ZSg,
      this.m1,
      this.Z1,
      '*',
      this.m2,
      this.Z2,
      '*',
      '+',
      this.mSg,
      '/',
    );


    this.FxMath.RPN(this.wXSg,
      this.XSg,
      this.ZSg,
      '/',
      'atan'
    );

    this.FxMath.RPN(this.wYSg,
      this.YSg,
      this.ZSg,
      '/',
      'atan'
    );

    this.FxMath.RPN(this.wZSg,
      this.XSg,
      '^2',
      this.YSg,
      '^2',
      '+',
      this.ZSg,
      '^2',
      '+',
      'Sqare',
      '1/x',
      this.ZSg,
      '*',
      'acos',
    );


  }


  ngOnDestroy() {
    this.Store.UpdateStoreCenterOfMasses(this.variableObjList);

  }
}



import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {StoreBiegebalkenService} from "src/app/pages/biegebalken/_store/StoreBiegebalkenService";
import {VariableUnitBuilder} from "src/app/shared/_classes/VariableUnitBuilder";
import {CommonValuesService} from "src/app/shared/_services/CommonValues.service";
import {FxMathService} from "src/app/shared/_services/FxMath.service";
import {MaterialSelectionService} from "src/app/shared/_services/MaterialSelection.service";
import {RadioButtonChangedService} from "src/app/shared/_services/RadioButtonChanged.service";
import {StoreInitService} from "src/app/shared/_services/StoreInit.service";
import {UnitConverterService} from "src/app/shared/_services/UnitConverter.service";
import {ValidateService} from "src/app/shared/_services/Validate.service";
import {HtmlAddTextService} from "../../../../shared/_services/HtmlAddText.service";
import {jgInputRestrictionDirective} from "../../../../shared/_directivesAsModule/InputRestriction.directive";
import {
  jgInputStringRestrictionDirective
} from "../../../../shared/_directivesAsModule/InputStringRestrictive.directive";
import {FormsModule} from "@angular/forms";
import {DecimalPipe, NgFor, NgIf} from "@angular/common";
import {IndexUpdaterService} from "../../../../shared/_services/IndexUpdater.service";
import {VarStoreService} from "../../../../shared/_services/var-store.service";


@Component({
  selector: "jg-euler",
  templateUrl: '../../../../htmlStructure/htmlBaseTemplate/TemplateVarlist.component.svg',
  styleUrls: ["./euler.component.sass"],
  standalone: true,
  imports: [NgIf, FormsModule, jgInputStringRestrictionDirective, NgFor, jgInputRestrictionDirective, DecimalPipe]
})
export class EulerComponent implements OnInit {

// ########## HTML Template Std-Variablen ##########
  public htmlButtonName: string = "Knickung nach Euler";
  public BerechnungsName: string = "";
  public jpgSource: string = "../../../../../assets/svg/Euler1.svg";
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
  public E = new VariableUnitBuilder('E', 'N/mm²', 210000, 'E-Modul', 'E', true);
  public F = new VariableUnitBuilder("F", "N", 0, "Kritische Druck-Kraft", "F", false, "x1", false, "fix", "var");
  public L = new VariableUnitBuilder("L", "mm", 0, "Länge ", "L", false, "x1", true);

// @Input() visibleBiegebalken: boolean = true;


// ########## Variablen festlegen ##########
  public I = new VariableUnitBuilder("I", "mm⁴", 0, "Trägheitsmoment ", "I", false, "x1", true);
  public S = new VariableUnitBuilder("S", "", 2, "Sicherheitsfaktor 2 -5", "S", false);
  public factor = new VariableUnitBuilder("factor", "", Math.pow(Math.PI, 2) / 4, "Eulerbeiwert", "-", true);
  public Euler = new VariableUnitBuilder("Euler", "+", [1, 2, 3, 4], "Eulerfallzahl 1-4", "Nr.", false, 'E', true, '-', '-')
  public EI = new VariableUnitBuilder("EI", "Nmm²", 0, "Elastitätsmodul x Flächenträgheit")
  public EIL = new VariableUnitBuilder("EIL", "", 0)
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
    private Store: StoreBiegebalkenService,
    private StoreInit: StoreInitService,
    public HtmlAddText: HtmlAddTextService,
    private router: Router,
    private IndexUpdater: IndexUpdaterService,
    private varstore: VarStoreService
  ) {
  }


  VarStore(obj: VariableUnitBuilder) {
    obj.keyStr = this.varstore.store(obj);
    obj.SelKeyStr.push(obj.keyStr)

  }


  IndexUdate() {
    this.IndexUpdater.Update(this.variableObjList, this.subindex)


  }

  ngOnInit(): void {

    /*Erstellen des Html mit der Variablenreihenfolge und Trennzeichen*/

    this.variableList.push(
      this.Euler,
      "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      this.F,
      this.L,
      this.I,
      this.S,

      "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      this.E,
      this.inputMat
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
    this.variableObjList.push(this.E, this.inputMat);

    if (this.Store.StoreEuler) {
      (
        this.Store.StoreEuler
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


    this.inputMat.inputStr = "Stahl"
    this.BerechnungsName = this.htmlButtonName;

    // this.addHTML =
    //   this.HtmlAddText.units.concat('\n',
    //     this.HtmlAddText.var_fix, '\n',
    //     this.HtmlAddText.ins_W_I_txt)

  } // END OF ON IN

  /*###### Unveränderte Standard-Funktionalöitäten######## */
  validate(obj: VariableUnitBuilder): void {
    this.Validate.validate(obj);
  }

  unitSwitch(obj: VariableUnitBuilder): void {
    this.UnitConvert.unitSwitch(obj);

    if (obj.varName == "Euler") {
      this.Euler.nominalValue++
      this.calcFactor()
      this.calc(obj);
    }
  }


  /*###### Festlegen, was bei welcher Eingabe welcher Code ausgefuehrt werden soll
   ######## keyup_VARABLENNAME(): void {   } ######## */

  // keyup_fzul(obj: VariableUnitBuilder): void {
  //   this.FxMath.RPN(this.factor, this.L, "/");
  // }

  fix_change(obj: VariableUnitBuilder): void {
    this.rbChanged.rb_changeSingleFix(obj, this.variableList);


    if (obj.fixGroup == 'E') {

      this.Euler.nominalValue--
      this.calcFactor()
      this.calc(obj);

    }
//    obj.fixStatus ? this.FxMath.RPN(this.W, this.CVari.get_Wx()) : this.FxMath.RPN(this.W, this.CVari.get_Wy());
//    this.rbChanged.MultiFix_Change(this.I);


//  obj.fixGroup == 'xF' ? this.FxMath.RPN(this.F, this.CVari.get_F()) : '';
//


//  if (obj.fixGroup == 'xW') {
//    obj.fixStatus ? this.FxMath.RPN(this.W, this.CVari.get_Wx()) : this.FxMath.RPN(this.W, this.CVari.get_Wy());
//    this.rbChanged.MultiFix_Change(this.I);
//
//  }
//  if (obj.fixGroup == 'xI') {
//    this.I.fixStatus ? this.FxMath.RPN(this.I, this.CVari.get_Ix()) : this.FxMath.RPN(this.I, this.CVari.get_Iy());
//    this.rbChanged.MultiFix_Change(this.W);

//  }

    this.calc(obj);
  }

  keyup(obj: VariableUnitBuilder): void {
    this.validate(obj);

    this.calcFactor()

    const FunctionCall: string = "keyup_" + obj.varName;
    const Vari: string = obj.varName;

    try {
      // @ts-ignore
      this[FunctionCall](obj);
      this.Meldung = FunctionCall;
    } catch (e) { // @ts-ignore
      this.Meldung = e.toString();
    }

    this.calc(obj)

  }

  MatToEmodule(inputMat: string) {


    this.E.nominalValue = this.Emod.MatToEmodule(inputMat);
    this.E.showValue = this.E.nominalValue;
    this.E.inputStr = this.E.nominalValue.toString();

    this.inputMat.inputStr = inputMat;
    this.inputMat.showStr = inputMat;

    this.calc(this.E);
  }

  calc(obj: VariableUnitBuilder): void {

    switch (obj.varName) {
      case "E":
        this.calcEI(obj)
        break;
    }

    switch (obj.varName) {
      case "I":
        this.calcEI(obj)
        break;
    }

    switch (obj.varName) {
      case "EI":
        this.calcI_EI(obj)
        break;
    }


    // switch (obj.varName) {
    //   case "L":
    //     break; }


    switch (obj.varName) {
      case "Euler":
        this.calcFactor();

        break;
    }

    // switch (obj.varName) {
    //   case "S":
    //     this.calcF(obj)
    //     break; }


    this.calcNonFix(obj);

  }

  calcFactor(): void {

    this.Euler.nominalValue = Math.floor(this.Euler.nominalValue)

    this.Euler.nominalValue > 4 ? this.Euler.nominalValue = 1 : null;
    this.Euler.nominalValue < 1 ? this.Euler.nominalValue = 4 : null;


    this.Euler.inputStr = this.Euler.nominalValue.toString()


    switch (this.Euler.inputStr) {
      case "1":
        this.FxMath.RPN(this.factor, Math.PI, "^2", 4, "/");
        break;

      case "2":
        this.FxMath.RPN(this.factor, Math.PI, "^2");
        break;

      case "3":
        this.FxMath.RPN(this.factor, 20.19);
        break;

      case "4":
        this.FxMath.RPN(this.factor, Math.PI, "^2", 4, "*");
        break;
    }


  }

  calcNonFix(obj: VariableUnitBuilder): void {

    this.F.fixStatus == false ? this.calcF(obj) : null;
    this.L.fixStatus == false ? this.calcL(obj) : null;
    this.I.fixStatus == false ? this.calcI(obj) : null;


  }

  calcF(obj: VariableUnitBuilder): void {
    this.FxMath.RPN(this.F, this.I, this.E, "*", this.L, "^2", "/", this.factor, "*", this.S, "/");
  }

  calcI(obj: VariableUnitBuilder): void {
    this.FxMath.RPN(this.I, this.F, this.L, "^2", "*", this.E, "/", this.factor, "/", this.S, "*");
    this.calcEI(obj)
  }

  calcL(obj: VariableUnitBuilder): void {
    this.FxMath.RPN(this.L, this.E, this.I, "*", this.F, "/", this.factor, "*", this.S, "/", "Sqare");
  }


  // calcEIL(obj: VariableUnitBuilder): void {
  //   this.FxMath.RPN(this.EIL, this.I, this.E, "*", this.L, "^2", "/");
  // }


//  this.FxMath.RPN(this.Mt, this.L, this.F, '*')

  calcEI(obj: VariableUnitBuilder): void {
    this.FxMath.RPN(this.EI, this.I, this.E, "*");
  }

  calcI_EI(VariableUnitBuilder): void {
    this.FxMath.RPN(this.I, this.EI, this.E, "/");
  }

  ngOnDestroy() {
    this.Store.UpdateStoreEuler(this.variableObjList);

  }
}



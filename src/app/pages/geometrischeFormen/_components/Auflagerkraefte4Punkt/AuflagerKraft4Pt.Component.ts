import {Component} from '@angular/core';
import {VariableUnitBuilder} from "../../../../shared/_classes/VariableUnitBuilder";
import {UnitConverterService} from "../../../../shared/_services/UnitConverter.service";
import {ValidateService} from "../../../../shared/_services/Validate.service";
import {RadioButtonChangedService} from "../../../../shared/_services/RadioButtonChanged.service";
import {MaterialSelectionService} from "../../../../shared/_services/MaterialSelection.service";
import {FxMathService} from "../../../../shared/_services/FxMath.service";
import {CommonValuesService} from "../../../../shared/_services/CommonValues.service";
import {StoreGeometrischeFormenService} from 'src/app/pages/geometrischeFormen/_store/StoreGeometrischeFormenService';
import {StoreInitService} from "../../../../shared/_services/StoreInit.service";
import {HtmlAddTextService} from "../../../../shared/_services/HtmlAddText.service";
import {Router} from "@angular/router";
import {IndexUpdaterService} from "../../../../shared/_services/IndexUpdater.service";
import {DecimalPipe, NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {
  jgInputStringRestrictionDirective
} from "../../../../shared/_directivesAsModule/InputStringRestrictive.directive";
import {jgInputRestrictionDirective} from "../../../../shared/_directivesAsModule/InputRestriction.directive";
import {VarStoreService} from "../../../../shared/_services/var-store.service";

@Component({
  imports: [NgIf, FormsModule, jgInputStringRestrictionDirective, NgFor, jgInputRestrictionDirective, DecimalPipe],
  selector: 'jg-AuflagerKraft4Pt',
  standalone: true,
  styleUrl: './AuflagerKraft4Pt.sass',
  templateUrl: '../../../../htmlStructure/htmlBaseTemplate/TemplateVarlist.component.svg'
})
export class AuflagerKraft4Pt {
// ########## HTML Template Std-Variablen ##########
  public htmlButtonName: string = "Auflagekraft auf 4 Punkte";
  public BerechnungsName: string = "";
  public jpgSource: string = "../../../../../assets/svg/SchwerPuntVerschiebung.svg";
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


  public Q = new VariableUnitBuilder('Q', 'N', 0, 'Gesamtgewicht', 'Q', false, 'xF', false, 'ins', 'ins');

  public A = new VariableUnitBuilder("A", "N", 0, "Auflagelast A", "FA", true);
  public B = new VariableUnitBuilder("B", "N", 0, "Auflagelast B", "FB", true);
  public C = new VariableUnitBuilder("C", "N", 0, "Auflagelast C", "FC", true);
  public D = new VariableUnitBuilder("D", "N", 0, "Auflagelast D", "FD", true);


  public l = new VariableUnitBuilder('L', 'mm', [0, 1397, 2797, 2997, 2786, 5853], 'Auflagepunkte Länge', 'L', false, '', false, '', '', true);
  public b = new VariableUnitBuilder('B', 'mm', [0, 1522, 1822, 2259], 'Auflagepunkte Breite', 'B', false, '', false, '', '', true);
  public xl = new VariableUnitBuilder('xL', 'mm', [0, 160, 300, 320, 303, 605], 'Verschiebung in der Länge', 'xL', false, '', false, '', '', true);
  public xb = new VariableUnitBuilder('xB', 'mm', [0, 170, 200, 244], 'Verschiebung in der  Breite', 'xB', false, '', false, '', '', true);

  public fact = new VariableUnitBuilder('fact', '', 0, 'Max. Faktor der Last Erhöhung', 'f', true, 'A', false, '', '');


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
    private varstore: VarStoreService,
  ) {
  }

  IndexUdate() {
    this.IndexUpdater.Update(this.variableObjList, this.subindex)
  }

  VarStore(obj: VariableUnitBuilder) {
    obj.keyStr = this.varstore.store(obj);
    obj.SelKeyStr.push(obj.keyStr)

  }


  ngOnInit(): void {

    /*Erstellen des Html mit der Variablenreihenfolge und Trennzeichen*/

    this.variableList.push(
      this.Q,
      "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      this.l,
      this.xl,
      "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",

      this.b,
      this.xb,

      "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      this.A,
      this.B,
      this.C,
      this.D,
      "----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      this.fact
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


    if (this.Store.AuflagerKraft4Pt) {
      (
        this.Store.AuflagerKraft4Pt
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


  validate(obj: VariableUnitBuilder): void {
    this.Validate.validate(obj);
  }

  unitSwitch(obj: VariableUnitBuilder): void {
    this.UnitConvert.unitSwitch(obj);
  }

  fix_change(obj: VariableUnitBuilder): void {
    this.rbChanged.rb_change(obj, this.variableList);
    obj.fixGroup == 'xF' ? this.FxMath.RPN(this.Q, this.CVari.get_F()) : '';

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

    this.FxMath.RPN(this.A,
      this.l, 2, '/', this.xl, '-', this.l, '/',
      this.b, 2, '/', this.xb, '-', this.b, '/',
      '*', this.Q, '*'
    );

    this.FxMath.RPN(this.B,
      this.l, 2, '/', this.xl, '+', this.l, '/',
      this.b, 2, '/', this.xb, '-', this.b, '/',
      '*', this.Q, '*'
    );

    this.FxMath.RPN(this.C,
      this.l, 2, '/', this.xl, '+', this.l, '/',
      this.b, 2, '/', this.xb, '+', this.b, '/',
      '*', this.Q, '*'
    );

    this.FxMath.RPN(this.D,
      this.l, 2, '/', this.xl, '-', this.l, '/',
      this.b, 2, '/', this.xb, '+', this.b, '/',
      '*', this.Q, '*'
    );


    this.FxMath.RPN(this.fact,
      this.C, this.Q, '/', 0.25, '/');


  }


  ngOnDestroy() {
    this.Store.UpdateStoreAuflagerKraft4Pt(this.variableObjList);

  }
}



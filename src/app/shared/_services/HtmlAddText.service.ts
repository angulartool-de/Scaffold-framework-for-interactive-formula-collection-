import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlAddTextService {


  public units: string = '<p>Mit den <i>Buttons</i> der <b> Maßeinheiten</b> können die Einheitsgrößen automatisch umgestellt werden';

  public ins_W_I_txt: string = '<p>Mit den <i>Buttons</i> <b> ins, Wx/Wy Ix/Iy</b> können die in anderen Berechnugen gespeicherten Werte automatisch übernommen werden';

  public var_fix: string = '<p>Mit den <i>Buttons</i> <b> var <-> fix </b> werden die Eingabewerte beibehalten und ein anderer möglicher Variablenwert wird bei der Berechnung geändert. Eine manuelle Eingabe bleibt möglich!';

  public sub: string = '<p>Mit den <i>Buttons</i> <b> sub </b> werden die Eingabewerte global gespeichert und sind in anderen Berechnung mit <b>ins</b> abrufbar ';

  public ins: string = '<p>Mit den <i>Buttons</i> <b> ins</b> können die in anderen Berechnugen gespeicherten Werte automatisch übernommen werden';

  public auto: string = '<p>Mit den <i>Buttons</i> <b> auto <-> man</b> kann diese Größe berechnet oder manuell eingegeben werden oder n';

  public sel: string = '<p>Mit den <i>Buttons</i> <b> no <-> sel </b> wird diese Größe bei <i>sel</i> global  gespeichert.';


  public TrägerTabelle: string = '<p>Durch <i>Klicken</i> innerhalb der <b>Trägertyp-Reihe</b> werden alle dieser Größen global gespeichert. <br> Die Tabelle kann durch <i>Klicken</i> in der <b>Kopfzeile</b> in den Spalten sortiert werden.';


  constructor() {
  }
}



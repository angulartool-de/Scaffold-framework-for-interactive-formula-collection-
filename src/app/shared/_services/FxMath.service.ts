import {Injectable} from '@angular/core';
import {UnitConverterService} from "src/app/shared/_services/UnitConverter.service";
import {VariableUnitBuilder} from "src/app/shared/_classes/VariableUnitBuilder";

@Injectable({
  providedIn: 'root'
})
export class FxMathService {

  constructor(
    private UnitConvert: UnitConverterService
  ) {
  }

  RunErg(ergebnis: VariableUnitBuilder, erg?: number): number {
    ergebnis.nominalValue = erg ? erg : ergebnis.nominalValue;
    this.UnitConvert.showValueResult(ergebnis);

    return ergebnis.nominalValue;


  }

  //  #########Funktions


  // Calc(ergebnis: VariableUnitBuilder, ...x: any): void {
  //   let erg: number = 1;
  //   let flag: string = '*';
  //   let value: number
  //   for (let i = 1; i < arguments.length; i++) {
  //
  //     switch (arguments[i]) {
  //       case '*':
  //         flag = '*';
  //         arguments[i] = 1;
  //         break;
  //       case '/':
  //         flag = '/';
  //         arguments[i] = 1;
  //         break;
  //       case '+':
  //         flag = '+';
  //         arguments[i] = 0;
  //         break;
  //       case '-':
  //         flag = '-';
  //         arguments[i] = 0;
  //         break;
  //       default:
  //         break;
  //     }
  //
  //     typeof arguments[i] === 'object' ? value = arguments[i].nominalValue : value = arguments[i];
  //     switch (flag) {
  //       case '*':
  //         erg = erg * value;
  //         break;
  //       case '/':
  //         erg = erg / value;
  //         break;
  //       case '+':
  //         erg = erg + value;
  //         break;
  //       case '-':
  //         erg = erg - value;
  //         break;
  //
  //       default:
  //         break;
  //     }
  //   }
  //
  //   this.RunErg(ergebnis, erg);
  // }

  RPN(ergebnis: VariableUnitBuilder, ...seq: any) {

    let stack = [], i = 0;

    typeof seq[i] === 'object' ? seq[i] = seq[i].nominalValue : null;
    stack.push(seq[i]);
    i++;

    while (i <= seq.length) {

      typeof seq[i] === 'object' ? seq[i] = seq[i].nominalValue : null; // Zahlenwert extraieren oder nix.
      let item = seq[i];  // Zahl oder Oeratoren


      if (isNaN(item)) {
        let a: number;
        let b: number;

        switch (item) {
          case '+':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push(a + b);

            break;
          case '-':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push(b - a)
            break;
          case '*':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push(a * b)
            break;
          case '/':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push(b / a)
            break;
          case '^':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push(Math.pow(b, a))
            break; //x^y
          case '^2':
            a = parseFloat(stack.pop());
            b = 2
            stack.push(Math.pow(a, b))
            break;
          case 'Sqare':
            a = parseFloat(stack.pop());
            b = 0.5
            stack.push(Math.pow(a, b))
            break; //Wurzel
          case 'x-y':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push(a);
            stack.push(b);
            break;
          case '1/x':
            stack.push(1)
            b = parseFloat(stack.pop());
            a = parseFloat(stack.pop());
            stack.push(b / a);
            break;
          case 'log':  //log(100)=2
            a = parseFloat(stack.pop());
            stack.push(Math.log10(a));
            break;
          case '10^x':  //10^x
            a = parseFloat(stack.pop());
            stack.push(Math.pow(10, a))
            break;
          case 'ln':
            a = parseFloat(stack.pop());
            stack.push(Math.log(a));
            break;//ln x=2.3025
          case 'exp':
            a = parseFloat(stack.pop());
            stack.push(Math.exp(a));
            break;// e^x
          case 'sin':
            a = parseFloat(stack.pop());
            stack.push(Math.sin(a * Math.PI / 180))
            break;  //grad
          case 'sinrad':
            a = parseFloat(stack.pop());
            stack.push(Math.sin(a))
            break; //rad
          case 'asin':
            a = parseFloat(stack.pop());
            stack.push(Math.asin(a) / Math.PI * 180)
            break;
          case 'asinrad':
            a = parseFloat(stack.pop());
            stack.push(Math.asin(a))
            break; //rad
          case 'cos':
            a = parseFloat(stack.pop());
            stack.push(Math.cos(a * Math.PI / 180))
            break;
          case 'cosrad':
            a = parseFloat(stack.pop());
            stack.push(Math.cos(a))
            break;
          case 'acos':
            a = parseFloat(stack.pop());
            stack.push(Math.acos(a) / Math.PI * 180)
            break;
          case 'acosrad':
            a = parseFloat(stack.pop());
            stack.push(Math.acos(a))
            break;  //rad
          case 'tan':
            a = parseFloat(stack.pop());
            stack.push(Math.tan(a * Math.PI / 180))
            break;
          case 'tanrad':
            a = parseFloat(stack.pop());
            stack.push(Math.tan(a))
            break;
          case 'atan':
            a = parseFloat(stack.pop());
            stack.push(Math.atan(a) / Math.PI * 180)
            break;  //rad
          case 'atanrad':
            a = parseFloat(stack.pop());
            stack.push(Math.atan(a))
            break; //rad
          case 'max':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push(Math.max(a, b))
            break;  //MAX(a,b)
          case 'min':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push(Math.min(a, b))
            break; //MIN(a,b)
          case '%':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push(b * a / 100)
            break;
          case '%CHG':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push((
              a * 100 / b) - 100)
            break;
          case '%T':
            a = parseFloat(stack.pop());
            b = parseFloat(stack.pop());
            stack.push((
              (
                b * 100) / (
                100 + a)));
            break;


          default:
            stack.push(parseFloat(item));
            break;
        }
      } else {
        stack.push(parseFloat(item));
      }
      // ##########################


      i++
    }

    ergebnis.nominalValue = stack[0];
    this.RunErg(ergebnis);


  };
}

import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[jgInputStringRestriction]',
  standalone: true
})
export class jgInputStringRestrictionDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {


    if (event.key === '0') {
    } else if (event.key === '1') {
    } else if (event.key === '2') {
    } else if (event.key === '3') {
    } else if (event.key === '4') {
    } else if (event.key === '5') {
    } else if (event.key === '6') {
    } else if (event.key === '7') {
    } else if (event.key === '8') {
    } else if (event.key === '9') {
    } else if (event.key === ',') {
    } else if (event.key === '.') {
    } else if (event.key === '_') {
    } else if (event.key === '-') {
    } else if (event.key === '+') {
      // } else if (event.key === '*') {
      // } else if (event.key === '/') {
      //  } else if (event.key === '^') {
    } else if (event.key === 'Backspace') {
    } else if (event.key === 'Insert') {
    } else if (event.key === 'ArrowLeft') {
    } else if (event.key === 'ArrowRight') {
    } else if (event.key === 'Delete') {
    } else if (event.key === ' ') {

    } else if (event.key === 'a') {
    } else if (event.key === 'b') {
    } else if (event.key === 'c') {
    } else if (event.key === 'd') {
    } else if (event.key === 'e') {
    } else if (event.key === 'f') {
    } else if (event.key === 'g') {
    } else if (event.key === 'h') {
    } else if (event.key === 'i') {
    } else if (event.key === 'j') {
    } else if (event.key === 'k') {
    } else if (event.key === 'l') {
    } else if (event.key === 'm') {
    } else if (event.key === 'n') {
    } else if (event.key === 'o') {
    } else if (event.key === 'p') {
    } else if (event.key === 'q') {
    } else if (event.key === 'r') {
    } else if (event.key === 's') {
    } else if (event.key === 't') {
    } else if (event.key === 'u') {
    } else if (event.key === 'v') {
    } else if (event.key === 'w') {
    } else if (event.key === 'x') {
    } else if (event.key === 'y') {
    } else if (event.key === 'z') {
    } else if (event.key === 'ß') {
    } else if (event.key === 'ä') {
    } else if (event.key === 'ü') {
    } else if (event.key === 'ö') {

    } else if (event.key === 'A') {
    } else if (event.key === 'B') {
    } else if (event.key === 'C') {
    } else if (event.key === 'D') {
    } else if (event.key === 'E') {
    } else if (event.key === 'F') {
    } else if (event.key === 'G') {
    } else if (event.key === 'H') {
    } else if (event.key === 'I') {
    } else if (event.key === 'J') {
    } else if (event.key === 'K') {
    } else if (event.key === 'L') {
    } else if (event.key === 'M') {
    } else if (event.key === 'N') {
    } else if (event.key === 'O') {
    } else if (event.key === 'P') {
    } else if (event.key === 'Q') {
    } else if (event.key === 'R') {
    } else if (event.key === 'S') {
    } else if (event.key === 'T') {
    } else if (event.key === 'U') {
    } else if (event.key === 'V') {
    } else if (event.key === 'W') {
    } else if (event.key === 'X') {
    } else if (event.key === 'Y') {
    } else if (event.key === 'Z') {

    } else if (event.key === 'Ä') {
    } else if (event.key === 'Ü') {
    } else if (event.key === 'Ö') {

    } else {
      event.preventDefault();
    }


  }
}



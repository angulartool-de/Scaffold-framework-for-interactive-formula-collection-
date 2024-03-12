import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[jgInputRestriction]',
  standalone: true
})

export class jgInputRestrictionDirective {

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
      // } else if (event.key === '+') {
    } else if (event.key === '-') {
      // } else if (event.key === '*') {
      // } else if (event.key === '/') {
      // } else if (event.key === '^') {
    } else if (event.key === 'Backspace') {
    } else if (event.key === 'Insert') {
    } else if (event.key === 'ArrowLeft') {
    } else if (event.key === 'ArrowRight') {
    } else if (event.key === 'Delete') {
    } else if (event.key === 'Tab') {
    } else if (event.key === 'Copy') {
    } else if (event.key === 'Paste') {
    } else if (event.key === 'Shift') {
    } else {
      event.preventDefault();
    }


  }


}



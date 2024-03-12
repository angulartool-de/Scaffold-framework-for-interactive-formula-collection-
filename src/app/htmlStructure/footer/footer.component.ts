import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'jg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  standalone: true,
  imports: [DatePipe]
})
export class FooterComponent implements OnInit {

  public timestamp: string

  //public counter: string
  constructor() {
  }

  ngOnInit(): void {
    this.timestamp = document.lastModified

  }

}

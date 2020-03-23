import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  contactName : '';
  breakpoint: number;
  constructor() { }

  ngOnInit() : void {
      this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event) :void {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}

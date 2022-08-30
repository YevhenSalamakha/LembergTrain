import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.scss'],
})
export class ScrollDownComponent implements OnInit {
  constructor() {}

  @HostListener('window:scroll', [])
  ngOnInit(): void {}

  scrollToDown() {
    window.scroll({
      top: 1070,
      left: 0,
      behavior: 'smooth',
    });
  }
}

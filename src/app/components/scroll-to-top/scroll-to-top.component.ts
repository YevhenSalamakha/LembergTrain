import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent implements OnInit {
  public isVisible = false;

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.pageYOffset > 100;
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  ngOnInit(): void {}
}

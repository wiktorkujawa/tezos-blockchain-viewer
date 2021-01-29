import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, DoCheck {
  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private breakpointObserver: BreakpointObserver) {}
  ngDoCheck(): void {
    console.log('layout');
  }


  ngOnInit(): void {
  }

  onSwitchTheme({ checked }: any) {
    checked
      ? this.document.body.classList.add('alternate-theme')
      : this.document.body.classList.remove('alternate-theme');
  }


}

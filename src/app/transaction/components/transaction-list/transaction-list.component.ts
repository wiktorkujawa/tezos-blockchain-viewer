import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, HostListener, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Transaction } from '../../models/transaction.model';
import { loadTransactions, loadNextTransactions } from '../../store/actions/transaction.actions';
import { TransactionState } from '../../store/reducers/transaction.reducer';
import { selectTransactions } from '../../store/selectors/transaction.selectors';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionListComponent implements OnInit {

  transactions$!: Observable<Transaction[]>;

  @ViewChild(CdkVirtualScrollViewport) virtualScroll!: CdkVirtualScrollViewport;

  tableLimit = 10;
  itemSize = 50;

  transactions: Transaction[] = [];
  constructor(
    private changeDetector: ChangeDetectorRef,
    private store: Store<TransactionState>,
    private breakpointObserver: BreakpointObserver,
    private ngZone: NgZone) {
      // setInterval(() => {
      //   this.loadNewTransactions();
      //   this.changeDetector.markForCheck();
      // } , 10000);


      ngZone.runOutsideAngular( () =>
      this.breakpointObserver.observe([
        '(max-width: 450px)',
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ]).subscribe(result => {
        if (result.matches) {
          result.breakpoints['(max-width: 450px)'] ?
          (
            this.itemSize = 104,
            this.tableLimit = 4
          ) :
          result.breakpoints[Breakpoints.XSmall] ?
          (
            this.itemSize = 64,
            this.tableLimit = 8
          ) :
          (
            this.itemSize = 50,
            this.tableLimit = 10
          );
        }
      }))
    }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular( () => this.loadNewTransactions());
  }

  onScroll(): void {
    if(this.virtualScroll.measureScrollOffset('bottom') === 0){
      this.store.dispatch(loadNextTransactions());
      this.transactions$ = this.store.pipe(select(selectTransactions));
    }
  }

  loadNewTransactions(): void {
    this.store.dispatch(loadTransactions());
    this.transactions$ = this.store.pipe(select(selectTransactions));
  }
}

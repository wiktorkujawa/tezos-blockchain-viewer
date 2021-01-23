import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Transaction } from '../../models/transaction.model';
import { TransactionService } from '../../services/transaction.service';
import { loadTransactions } from '../../store/actions/transaction.actions';
import { TransactionState } from '../../store/reducers/transaction.reducer';
import { selectTransactions } from '../../store/selectors/transaction.selectors';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionListComponent implements OnInit {

  transactions$!: Observable<Transaction[]>

  @ViewChild(CdkVirtualScrollViewport) virtualScroll!: CdkVirtualScrollViewport;

  limit: number = 10;

  tableLimit: number = 10;
  itemSize: number = 50;

  transactions: Transaction[] = [];
  constructor(
    private store: Store<TransactionState>,
    private breakpointObserver: BreakpointObserver) {
      this.breakpointObserver.observe([
        '(max-width: 450px)',
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ]).subscribe(result => {
        if (result.matches) {
          result.breakpoints['(max-width: 450px)']?
          (this.itemSize = 104,
            this.tableLimit = 5):
          result.breakpoints[Breakpoints.XSmall] ?
            (this.itemSize = 64,
              this.tableLimit=10):
            (this.itemSize = 50,
              this.tableLimit=10);
          
        }
      });
    }

  ngOnInit(): void {
    this.loadNewTransactions();
  }

  onScroll(event: any){
    if(event.srcElement.scrollTop>(this.limit-this.tableLimit)*this.itemSize)
    {
      console.log(this.itemSize);
      this.limit++;
      this.store.dispatch(loadTransactions({limit:this.limit}));
      this.transactions$ = this.store.pipe(select(selectTransactions));
    }
  }

  intervalId = setInterval(() => this.loadNewTransactions(), 5000);

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  loadNewTransactions(){
    this.store.dispatch(loadTransactions({limit:this.limit}));
    this.transactions$ = this.store.pipe(select(selectTransactions));
  }
}

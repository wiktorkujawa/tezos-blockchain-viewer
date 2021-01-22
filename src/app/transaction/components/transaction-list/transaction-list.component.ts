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

  scrollposition: number = 0;

  transactions: Transaction[] = [];
  constructor(
    private store: Store<TransactionState>
    ) { }

  ngOnInit(): void {
    this.loadNewTransactions();
  }

  onScroll(event: any){
    console.log(event);
    console.log(`Scroll position: ${event.srcElement.scrollTop}`);
    console.log(`Requirement: ${(this.limit-10)*44}`);
    if(event.srcElement.scrollTop>(this.limit-10)*44)
    {
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

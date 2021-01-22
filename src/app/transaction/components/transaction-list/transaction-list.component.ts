import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
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

  limit: number = 10;

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
    console.log(`Requirement: ${(this.limit-11)*44}`);
    if(event.srcElement.scrollTop>(this.limit-11)*44)
    {
      this.limit++;
      this.store.dispatch(loadTransactions({limit:this.limit}));
      this.transactions$ = this.store.pipe(select(selectTransactions));
    }
  }

  loadNewTransactions(){
    this.store.dispatch(loadTransactions({limit:this.limit}));
    this.transactions$ = this.store.pipe(select(selectTransactions));
    this.limit++;
  }
}

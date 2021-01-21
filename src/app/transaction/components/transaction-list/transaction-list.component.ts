import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactions$!: Observable<Transaction[]>

  

  limit: number = 10;

  transactions: Transaction[] = [];
  constructor(
    private store: Store<TransactionState>
    ) { }

  ngOnInit(): void {
    this.store.dispatch(loadTransactions({limit:this.limit}));
    this.loadNewTransactions();
  }

  changeNumber(){
    this.limit++;
    this.store.dispatch(loadTransactions({limit:this.limit}));
    this.loadNewTransactions();
  }

  intervalId = setInterval(() => this.changeNumber(), 3000);

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


  loadNewTransactions(){
    this.transactions$ = this.store.pipe(select(selectTransactions));
  }
}

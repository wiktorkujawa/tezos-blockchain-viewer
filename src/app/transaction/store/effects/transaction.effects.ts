import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import * as TransactionActions from '../actions/transaction.actions';
import { TransactionService } from '../../services/transaction.service';
import { Store } from '@ngrx/store';
import * as fromReducers from '../reducers/transaction.reducer';


@Injectable()
export class TransactionEffects {

  loadTransactions$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TransactionActions.loadTransactions),
    withLatestFrom(this.store.select(fromReducers.limitSelector)),
    mergeMap( ([_, state]) =>
      this.transactionService.loadTransactions(state).pipe(
        map( transactions => TransactionActions.loadTransactionsSuccess({transactions})),
        catchError( error =>
          of(TransactionActions.loadTransactionsFailure({error})))
        )
      )
    )
  );

  loadNextTransactions$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TransactionActions.loadNextTransactions),
    withLatestFrom(this.store.select(fromReducers.limitSelector)),
    mergeMap( ([_, state]) =>
      this.transactionService.loadTransactions(state).pipe(
        map( transactions => TransactionActions.loadNextTransactionsSuccess({transactions})),
        catchError( error =>
          of(TransactionActions.loadNextTransactionsFailure({error})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store : Store<fromReducers.TransactionState>,
    private transactionService: TransactionService) {}
}

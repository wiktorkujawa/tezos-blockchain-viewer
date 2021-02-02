import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as TransactionActions from '../actions/transaction.actions';
import { TransactionService } from '../../services/transaction.service';


@Injectable()
export class TransactionEffects {

  loadTransactions$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TransactionActions.loadTransactions),
    mergeMap( action =>
      this.transactionService.loadTransactions(action.limit).pipe(
        map( transactions => TransactionActions.loadTransactionsSuccess({transactions})),
        catchError( error =>
          of(TransactionActions.loadTransactionsFailure({error})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private transactionService: TransactionService) {}
}

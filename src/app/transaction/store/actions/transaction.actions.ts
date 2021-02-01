import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../models/transaction.model';

// Load transactions(refresh)
export const loadTransactions = createAction(
  'LOAD_TRANSACTIONS[EFFECTS]'
);

export const loadTransactionsSuccess = createAction(
  'LOAD_TRANSACTIONS_SUCCESS[EFFECTS]',
  props<{ transactions: Transaction[] }>()
);

export const loadTransactionsFailure = createAction(
  'LOAD_TRANSACTIONS_ERROR[EFFECTS]',
  props<{ error: any }>()
);

//Load next transactions(scroll)
export const loadNextTransactions = createAction(
  'LOAD_NEXT_TRANSACTIONS[EFFECTS]'
);

export const loadNextTransactionsSuccess = createAction(
  'LOAD_NEXT_TRANSACTIONS_SUCCESS[EFFECTS]',
  props<{ transactions: Transaction[] }>()
);

export const loadNextTransactionsFailure = createAction(
  'LOAD_NEXT_TRANSACTIONS_ERROR[EFFECTS]',
  props<{ error: any }>()
);
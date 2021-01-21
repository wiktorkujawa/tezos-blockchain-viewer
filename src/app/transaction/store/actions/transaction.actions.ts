import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../models/transaction.model';

export const loadTransactions = createAction(
  'LOAD_TRANSACTIONS[EFFECTS]',
  props<{ limit: number }>()
);

export const loadTransactionsSuccess = createAction(
  'LOAD_TRANSACTIONS_SUCCESS[EFFECTS]', 
  props<{ transactions: Transaction[] }>()
);

export const loadTransactionsFailure = createAction(
  'LOAD_TRANSACTIONS_ERROR[EFFECTS]', 
  props<{ error: any }>()
);
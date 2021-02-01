import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, limitSelector, transactionsFeatureKey, TransactionState } from '../reducers/transaction.reducer';

export const selectTransactionState = createFeatureSelector<TransactionState>(
  transactionsFeatureKey
);


export const selectTransactions = createSelector( selectTransactionState, limitSelector, selectAll);

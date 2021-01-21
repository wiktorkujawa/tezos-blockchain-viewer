import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, transactionsFeatureKey, TransactionState } from '../reducers/transaction.reducer';

export const selectTransactionState = createFeatureSelector<TransactionState>(
  transactionsFeatureKey
);

export const selectTransactions = createSelector( selectTransactionState, selectAll);
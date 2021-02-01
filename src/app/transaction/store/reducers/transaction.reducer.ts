import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Transaction } from '../../models/transaction.model';
import * as TransactionActions from '../actions/transaction.actions';

export const transactionsFeatureKey = 'transactions';

export interface TransactionState extends EntityState<Transaction> {
  error: any;
  limit: number;
}

export const adapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>(
  {
    // First index(0) of array is the row_id which will be assigned to selectIds
    selectId: (transaction: Transaction) => transaction[0],
  }
);

export const initialState: TransactionState = adapter.getInitialState({
  error: undefined,
  limit: 10,
});

export const reducer = createReducer(
  initialState,
  on(TransactionActions.loadTransactionsSuccess, (state, action) => {
    return adapter.setAll(action.transactions, state);
  }),
  on(TransactionActions.loadTransactionsFailure, (state, { error }) => {
    return { ...state, error };
  }),
  on(TransactionActions.loadNextTransactionsSuccess, (state, action) => {
    return adapter.setAll(action.transactions, {
      ...state,
      limit: state.limit + 1,
    });
  }),
  on(TransactionActions.loadNextTransactionsFailure, (state, { error }) => {
    return { ...state, error };
  })
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const limitSelector = (state: any) => {
  return state.transactions.limit;
};

import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Transaction } from '../../models/transaction.model';
import * as TransactionActions from '../actions/transaction.actions';

export const transactionsFeatureKey = 'transactions';

export interface TransactionState extends EntityState<Transaction> {
  error: any
}

export const adapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>({
  selectId: (transaction: Transaction) => transaction[length]
});

export const initialState: TransactionState = adapter.getInitialState({
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(TransactionActions.loadTransactionsSuccess,
    (state, action) => adapter.setAll(action.transactions, state)
  ),
  on(TransactionActions.loadTransactionsFailure,
    (state, {error}) => {
      return { ...state,
      error: error
      }
    }
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

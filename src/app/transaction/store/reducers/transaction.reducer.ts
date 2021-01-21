import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Transaction } from '../../models/transaction.model';
import * as TransactionActions from '../actions/transaction.actions';

export const transactionsFeatureKey = 'transactions';

export interface TransactionState extends EntityState<Transaction> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>();

export const initialState: TransactionState = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(TransactionActions.addTransaction,
    (state, action) => adapter.addOne(action.transaction, state)
  ),
  on(TransactionActions.upsertTransaction,
    (state, action) => adapter.upsertOne(action.transaction, state)
  ),
  on(TransactionActions.addTransactions,
    (state, action) => adapter.addMany(action.transactions, state)
  ),
  on(TransactionActions.upsertTransactions,
    (state, action) => adapter.upsertMany(action.transactions, state)
  ),
  on(TransactionActions.updateTransaction,
    (state, action) => adapter.updateOne(action.transaction, state)
  ),
  on(TransactionActions.updateTransactions,
    (state, action) => adapter.updateMany(action.transactions, state)
  ),
  on(TransactionActions.deleteTransaction,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TransactionActions.deleteTransactions,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TransactionActions.loadTransactions,
    (state, action) => adapter.setAll(action.transactions, state)
  ),
  on(TransactionActions.clearTransactions,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

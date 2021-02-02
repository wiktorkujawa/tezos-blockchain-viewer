import { initialState } from '../reducers/transaction.reducer';
import * as fromSelectors from './transaction.selectors';

describe('Transaction Selectors', () => {
  it('should select the feature state', () => {
    const result = fromSelectors.selectTransactions.projector(initialState);

    expect(result.length).toEqual(0);
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TransactionEffects } from './transaction.effects';

describe('TransactionEffects', () => {
  let actions$: Observable<any>;
  let effects: TransactionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [
        TransactionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TransactionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

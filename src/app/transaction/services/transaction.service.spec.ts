import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransactionService } from './transaction.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '../store/reducers/transaction.reducer';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
    ],
    providers: [
      provideMockStore({ initialState }),
    ],

    });
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

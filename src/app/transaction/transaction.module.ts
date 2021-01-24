import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, registerLocaleData  } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from '../material/material.module';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTransaction from './store/reducers/transaction.reducer';
import { TransactionEffects } from './store/effects/transaction.effects';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TransactionListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionRoutingModule,
    HttpClientModule,
    ScrollingModule,
    EffectsModule.forFeature([TransactionEffects]),
    StoreModule.forFeature(fromTransaction.transactionsFeatureKey, fromTransaction.reducer)
  ]
})
export class TransactionModule { }

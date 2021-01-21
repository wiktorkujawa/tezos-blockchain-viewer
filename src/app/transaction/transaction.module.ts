import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from '../material/material.module';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTransaction from './store/reducers/transaction.reducer';
import { TransactionEffects } from './store/effects/transaction.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TransactionListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([TransactionEffects]),
    StoreModule.forFeature(fromTransaction.transactionsFeatureKey, fromTransaction.reducer)
  ]
})
export class TransactionModule { }

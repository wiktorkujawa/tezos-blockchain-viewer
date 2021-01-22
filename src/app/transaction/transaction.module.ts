import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData  } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from '../material/material.module';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTransaction from './store/reducers/transaction.reducer';
import { TransactionEffects } from './store/effects/transaction.effects';
import { HttpClientModule } from '@angular/common/http';

import localePl from '@angular/common/locales/zu';
registerLocaleData(localePl);

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

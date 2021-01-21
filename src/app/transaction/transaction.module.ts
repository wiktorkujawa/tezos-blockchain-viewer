import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from '../material/material.module';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import * as fromTransaction from './store/reducers/transaction.reducer';
import { TransactionEffects } from './store/effects/transaction.effects';


@NgModule({
  declarations: [TransactionListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forFeature([TransactionEffects]),
    StoreModule.forFeature(fromTransaction.transactionsFeatureKey, fromTransaction.reducer)
  ]
})
export class TransactionModule { }

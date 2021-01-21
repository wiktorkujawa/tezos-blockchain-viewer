import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from '../material/material.module';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';


@NgModule({
  declarations: [TransactionListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }

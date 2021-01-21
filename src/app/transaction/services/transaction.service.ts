import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http: HttpClient) { }


  loadTransactions( limit: number): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${environment.apiUrl}${limit}&cursor.lte=18990092`);
  }

}
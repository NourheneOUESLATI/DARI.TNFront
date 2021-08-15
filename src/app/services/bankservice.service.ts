import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bank} from '../model/bank';
import {Observable} from 'rxjs';
import * as url from 'url';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({providedIn: 'root'})

export class BankserviceService {
  private bankUrl: string;
  constructor(private http: HttpClient) {
    this.bankUrl = 'http://localhost:8081';
  }

  public getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(`${this.bankUrl}/Bank/banks`);
  }

  public addBank(bank: Bank): Observable<Bank> {
    return this.http.post<Bank>(`${this.bankUrl}/Bank/savebank`, bank, httpOptions);
  }

  public updateBank(bank: Bank): Observable<Bank> {
    return this.http.put<Bank>(`${this.bankUrl}/Bank/updatebank`, bank, httpOptions);
  }

  public deleteBank(id: number): Observable<void> {
    return this.http.delete<void>(`${this.bankUrl}/Bank/deletebank/${id}`);
  }
  public getBankbyid(id: number): Observable<Bank> {
    return this.http.get<Bank>(`${this.bankUrl}/Bank/getbankbyid/${id}`);
  }
  }


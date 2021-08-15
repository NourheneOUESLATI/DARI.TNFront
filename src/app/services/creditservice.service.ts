import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bank} from '../model/bank';
import {Credit} from '../model/credit';
import {flatMap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CreditserviceService {
  private creditUrl: string;
  constructor(private http: HttpClient) {
    this.creditUrl = 'http://localhost:8081';
  }
  public getcredits(): Observable<Credit[]> {
    return this.http.get<Credit[]>(`${this.creditUrl}/Credit/credits`);
  }

  public addcredit(credit: Credit): Observable<Credit> {
    return this.http.post<Credit>(`${this.creditUrl}/Credit/savecreditdetails`, credit);
  }

  public updatecredit(credit: Credit): Observable<Credit> {
    return this.http.put<Credit>(`${this.creditUrl}/Credit/updatecredit`, credit);
  }

  public deletecredit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.creditUrl}/Credit/deletecredit/${id}`);
  }
  public stat(): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(`${this.creditUrl}/Credit/Stat`);
  }
}

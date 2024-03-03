import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  

  constructor(
    private http: HttpClient,
  ) { }

  getAllStaticData() {
    return this.http.get('https://elhoussam.github.io/invoicesapi/db.json')
      .pipe(tap(res => console.log(res)));
  }
}

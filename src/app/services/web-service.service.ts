import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebServiceService {
  // private url = 'http://localhost:3000';
  private url = 'https://luck-app.onrender.com';

  constructor(private _http: HttpClient) {}

  validateItemGame(params: number): Observable<any> {
    const url = `${this.url}/validateQrCode`;
    return this._http.post(url, params);
  }
}

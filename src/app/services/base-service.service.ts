import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  http: HttpClient = inject(HttpClient);
  apiUrl = environment.apiUrl


  post<T>(url: string, body?: any): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, body)
  }

  get<T>(url: string, params = {}): Observable<T> {
    return this.http.get<T>(this.apiUrl + url, {
      params: params
    })
  }


  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.apiUrl + url)
  }

  put<T>(url: string, body?: any): Observable<T> {
    return this.http.put<T>(this.apiUrl + url, body)
  }

}

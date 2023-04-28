import {inject, Injectable} from '@angular/core';
import {BaseServiceService} from "./base-service.service";
import {Observable, tap} from "rxjs";

import {CookieService} from "./cookie.service";


import {LoginResponse, Login} from "../interfaces/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseServiceService{
  cookieService: CookieService = inject(CookieService)


  login(payload: Login): Observable<LoginResponse> {
    return this.post<LoginResponse>('authentication/token/validate_with_login?api_key=', payload)
      .pipe(
        tap((response: LoginResponse) => {
            this.setApiKey(response.apiKey);

          }
        )
      )
  }
  logout() {
    localStorage.clear();
  }
setApiKey(apiKey: string) {
  localStorage.setItem('apiKey', apiKey);
}
  refreshToken(refreshToken: string): Observable<LoginResponse> {
    return this.post<LoginResponse>('apiKey', {refreshToken});
  }
  getRefreshToken(): string | null {
    return localStorage.getItem('apiKey');
  }
}

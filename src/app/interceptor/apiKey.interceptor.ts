import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {BehaviorSubject, catchError, filter, finalize, Observable, of, switchMap, take} from 'rxjs';
import {CookieService} from "../services/cookie.service";
import {AuthService} from "../services/auth.service";
import {environment} from "../../environments/environment";

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

apiKey: string = environment.api_key;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({
      setParams: {
        api_key: this.apiKey
      }
    }));
  }




}

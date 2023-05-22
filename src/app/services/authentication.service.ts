import { Injectable } from '@angular/core';
import {BaseServiceService} from "./base-service.service";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseServiceService{
  get token(): string | null {
    return localStorage.getItem('token');
  }
  get user(): any | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

}

import { Injectable } from '@angular/core';
import {BaseServiceService} from "./base-service.service";
import {ItvChangeList} from "../interfaces/tvChangeList";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseServiceService{
  get token(): string | null {
    return localStorage.getItem('token');
  }
  get user(): ItvChangeList | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

}

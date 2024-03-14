import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {BaseServiceService} from './base-service.service';
import {ApiResponse, Movie} from "../interfaces";
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TvService extends BaseServiceService  {
  apiKey = environment.api_key;

  discoverTvShows(): Observable<ApiResponse<Movie.Movie>> {
    return this.get<ApiResponse<Movie.Movie>>(`discover/tv`)
  }
}

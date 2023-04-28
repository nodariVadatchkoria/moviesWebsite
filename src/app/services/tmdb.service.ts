import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'ac8e2b2c50afebfa47ac487c0271aa49';

  constructor(private http: HttpClient) { }

  getMovieImage(movieId: number | undefined): Observable<string> {
    const url = `${this.apiUrl}/movie/${movieId}/images?api_key=${this.apiKey}`;
    return this.http.get(url)
      .pipe(
        map((response: any) => {
          const imageUrl = response.backdrops[0].file_path;
          return `https://image.tmdb.org/t/p/w500${imageUrl}`;
        }),
        catchError((error: any) => {
          console.error('Failed to fetch movie.ts images:', error);
          return throwError(error);
        })
      );
  }

  getTopRatedMovies(): Observable<any[]> {
    const url = `${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get<any[]>(url)
      .pipe(
        map((response: any) => response.results),
        catchError((error: any) => {
          console.error('Failed to fetch top-rated movies:', error);
          return throwError(error);
        })
      );
  }
  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url)
      .pipe(
        catchError((error: any) => {
          console.error('Failed to fetch movie.ts details:', error);
          return throwError(error);
        })
      );
  }

}

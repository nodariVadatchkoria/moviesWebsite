import {Component, OnInit} from '@angular/core';
import {TmdbService} from "../../services/tmdb.service";
import {Observable, Subject, takeUntil, tap} from "rxjs";
import {IMovie} from "../../interfaces/movie";
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-top-rated-movies',
    templateUrl: './top-rated-movies.component.html',
    styleUrls: ['./top-rated-movies.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, AsyncPipe]
})
export class TopRatedMoviesComponent implements OnInit {
  topRatedMovies: any[] = [];
  sub$ = new Subject()
  movies$: Observable<IMovie[]> | undefined

  constructor(
    private tmdbService: TmdbService
  ) {}
  ngOnInit() {
    this.fetchTopRatedMovies();
    this.movies$ = this.tmdbService.getTopRatedMovies();
  }
  fetchTopRatedMovies() {
    this.tmdbService.getTopRatedMovies()
      .pipe(takeUntil(this.sub$))
      .subscribe((movies: any[]) => {
        this.topRatedMovies = movies;
        console.log(this.topRatedMovies);
        this.fetchMovieDetails();
      });
  }
  getMovieImage(movieId: number) {
    return this.tmdbService.getMovieImage(movieId).pipe(
      tap(
        console.log
      )
    );

  }
  fetchMovieDetails() {
    for (const movie of this.topRatedMovies) {
      this.tmdbService.getMovieDetails(movie.id)
        .subscribe((details: any) => {
          movie.title = details.title;
          movie.original_language = details.original_language;
        });
    }
  }

  endPoint= 'https://image.tmdb.org/t/p/w500';

}

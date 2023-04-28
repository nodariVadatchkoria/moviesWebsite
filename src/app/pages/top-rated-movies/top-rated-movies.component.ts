import {Component, OnInit} from '@angular/core';
import {TmdbService} from "../../services/tmdb.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
  topRatedMovies: any[] = [];
  sub$ = new Subject()

  constructor(
    private tmdbService: TmdbService
  ) {}
  ngOnInit() {
    this.fetchTopRatedMovies();
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
    return this.tmdbService.getMovieImage(movieId);
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

}

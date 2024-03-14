import {Component, OnInit} from '@angular/core';
import {TmdbService} from '../../services';
import {Observable, Subject, takeUntil, tap} from 'rxjs';
import {Movie} from '../../interfaces';
import {NgIf, NgFor, AsyncPipe, CommonModule} from '@angular/common';
import Popular = Movie.Popular;
import {MatDialog} from '@angular/material/dialog';
import {DetailComponent} from '../detail/detail.component';
import {OverviewsComponent} from './overviws/overviews.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSpinModule} from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, CommonModule, NzButtonModule, NzSpinModule]
})
export class TopRatedMoviesComponent implements OnInit {
  topRatedMovies: any[] = [];
  sub$ = new Subject();
  movies$: Observable<Popular[]> | undefined;

  constructor(
    private tmdbService: TmdbService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.fetchTopRatedMovies();
    setTimeout(() => {
      this.movies$ = this.tmdbService.getTopRatedMovies();
    }, 2000);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(OverviewsComponent,
      {
        width: '600px',
        height: '400px',
        enterAnimationDuration,
        exitAnimationDuration

      });

  }

  isOpen = false;

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

  endPoint = 'https://image.tmdb.org/t/p/w500';

}

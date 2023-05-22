import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {map, Observable} from "rxjs";
import {TmdbService} from "../../services";

import {RouterLink, RouterOutlet} from "@angular/router";
import {MovieImagesComponent} from "../movie-images/movie-images.component";
import {TopRatedMoviesComponent} from "../top-rated-movies/top-rated-movies.component";
import {SliderComponent} from "../../layout/slider/slider.component";
import {Movie} from "../../interfaces";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [CommonModule, RouterOutlet, MovieImagesComponent, TopRatedMoviesComponent, RouterLink, SliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'moviesWebsite'

  movieImage: Observable<string> | undefined;

  popularMovies$:Observable< Movie.Popular | null> = this.tmdbService.getPopularMovies({
    page: 1,
    language: 'en-US',
  }).pipe(
    map((res) => {
      if (res.results && res.results.length) {
        return res.results[0];
      }
      return null;
    }),
  )

  constructor(
    private tmdbService: TmdbService,
  ) {
  }

  ngOnInit(): void {



  }
  fetchMovieImage() {
    const movieId = 123; // Replace with the actual movie.ts ID you want to fetch the image for
    this.movieImage = this.tmdbService.getMovieImage(movieId);
  }


}

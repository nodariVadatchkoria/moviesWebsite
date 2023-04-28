import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TmdbService} from "../../services/tmdb.service";

@Component({
  selector: 'app-movie-images',
  templateUrl: './movie-images.component.html',
  styleUrls: ['./movie-images.component.scss']
})
export class MovieImagesComponent implements OnInit {

  movieId: number | undefined = 238;
  movieImage: Observable<string> | undefined;

  constructor(private tmdbService: TmdbService) {}


  fetchMovieImage() {

    this.movieImage = this.tmdbService.getMovieImage(this.movieId);


  }

  ngOnInit(): void {
    this.fetchMovieImage();
  }

}

import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {TmdbService} from "../../services";
import {AppModule} from "../../app.module";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AppModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title = 'moviesWebsite'

  movieImage: Observable<string> | undefined;
  constructor(
    private tmdb: TmdbService,
  ) {
  }

  ngOnInit(): void {
    this.fetchMovieImage();
  }
  fetchMovieImage() {
    const movieId = 123; // Replace with the actual movie.ts ID you want to fetch the image for
    this.movieImage = this.tmdb.getMovieImage(movieId);
  }


}

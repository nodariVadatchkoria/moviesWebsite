import {Component, OnInit} from '@angular/core';
import {TmdbService} from "./services/tmdb.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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
    const movieId = 123; // Replace with the actual movie ID you want to fetch the image for
    this.movieImage = this.tmdb.getMovieImage(movieId);
  }

}

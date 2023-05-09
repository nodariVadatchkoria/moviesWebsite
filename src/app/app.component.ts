import {Component, OnInit} from '@angular/core';
import {TmdbService} from "./services/tmdb.service";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',


})
export class AppComponent {
  title = 'moviesWebsite'

//   movieImage: Observable<string> | undefined;
// constructor(
//   private tmdb: TmdbService,
// ) {
// }
//
//   ngOnInit(): void {
//     this.fetchMovieImage();
//   }
//   fetchMovieImage() {
//     const movieId = 123; // Replace with the actual movie.ts ID you want to fetch the image for
//     this.movieImage = this.tmdb.getMovieImage(movieId);
//   }

}

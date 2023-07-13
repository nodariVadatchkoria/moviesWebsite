import {Component, Inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TmdbService} from "../../services";
import {ApiResponse, Movie} from "../../interfaces";
import {MovieCardsComponent} from "../../layout/movie-cards/movie-cards.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MovieCardsComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 tmdbService: TmdbService =Inject(TmdbService)

  movies = signal<Movie.Movie[]>([])
movieS = signal<Movie.Movie[]>([])

getMovies(){
   this.tmdbService.searchMovies({
     page: 1,
      query: 'test',
     language: 'en-US'
    }).subscribe((res: ApiResponse<Movie.Movie>) => {
      this.movies.set(res.results)

   })
}

  ngOnInit(): void {
    this.getMovies()
    console.log(this.movies)
  }

}

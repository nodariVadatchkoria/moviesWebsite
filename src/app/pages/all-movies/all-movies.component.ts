import { Component } from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {IndexedDBService} from "../../services/indexed-db.service";

@Component({
    selector: 'app-all-movies',
    templateUrl: './all-movies.component.html',
    styleUrls: ['./all-movies.component.scss'],
    standalone: true
})
export class AllMoviesComponent {
  // movies: Movies[] = [];
  // sub$ = new Subject()
  // constructor(private movieService: IndexedDBService) { }

  // ngOnInit() {this.getAllMovies()}
  //
  //
  // getAllMovies() {
  //   this.movieService.getAllMovies().subscribe(
  //     (movies: Movie[]) => {
  //       this.movies = movies;
  //     },
  //     (error:any) => {
  //       console.error('Error retrieving movies:', error);
  //     }
  //   );
  // }
}

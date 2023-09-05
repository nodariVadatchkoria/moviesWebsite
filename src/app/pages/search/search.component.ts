import {ChangeDetectionStrategy, Component, effect, inject, Inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TmdbService} from "../../services";
import {ApiResponse, Movie} from "../../interfaces";
import {MovieCardsComponent} from "../../layout/movie-cards/movie-cards.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, map} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {NgxPaginationModule} from "ngx-pagination";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MovieCardsComponent, ReactiveFormsModule, NgxPaginationModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
 tmdbService: TmdbService = inject(TmdbService);

  filterForm: FormGroup = new FormGroup({
    with_genres: new FormControl(''),
    primary_release_year: new FormControl('2023'),
  });
  movies = signal<Movie.Movie[]>([])

  filter : any = signal<any>(this.filterForm.value)

  genres = toSignal(this.tmdbService.getGenres().pipe(map(res => res.genres)))

  filterMoviees = effect(() => {
    console.log('filter' , this.filter())
    console.log('movies' , this.filter())
  });


page = signal<number>(1)

  pages: number = 1;
  public maxSize: number = 7;



  ngOnInit(): void {
    this.getMovies()

    this.filterForm.valueChanges
      .pipe(
        debounceTime(500),
      )
      .subscribe((value) => {
      this.filter.set(value)
      this.getMovies()
    })
  }
  getMovies(){
    this.tmdbService.searchMovies({
      page: this.page(),
      language: 'en-US',
      ...this.filter()
    }).subscribe((res ) => {
      this.movies.set(res.results)

    })
  }


  onChangeTable($event: any) {
      this.page.update(value => value + 1)
    console.log(this.page())
    this.getMovies()
  }
}

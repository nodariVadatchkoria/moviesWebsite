import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TmdbService} from "../../services";
import { AsyncPipe } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-movie-images',
    templateUrl: './movie-images.component.html',
    styleUrls: ['./movie-images.component.scss'],
    standalone: true,
    imports: [FormsModule, AsyncPipe, ReactiveFormsModule]
})
export class MovieImagesComponent implements OnInit {

  @Input() movieId: any = 238;
  movieImage: Observable<string> | undefined;

  constructor(private tmdbService: TmdbService) {}


  fetchMovieImage() {

    this.movieImage = this.tmdbService.getMovieImage(this.movieId);


  }

  ngOnInit(): void {
    this.fetchMovieImage();
  }

}

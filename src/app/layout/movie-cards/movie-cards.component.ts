import {Component, HostListener, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Movie} from "../../interfaces";
import {ImagePipe} from "../../core/pipes";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-cards',
  standalone: true,
  imports: [CommonModule, ImagePipe, NgOptimizedImage],
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent {
  @Input() movie: Movie.Movie = {} as Movie.Movie;

  @HostListener('click', ['$event'])

  onClick(event: MouseEvent ) {
    this.router.navigate(['/movie', this.movie.id])
  }

  protected readonly Movie = Movie;
constructor(
  private router: Router,
) {
}
}

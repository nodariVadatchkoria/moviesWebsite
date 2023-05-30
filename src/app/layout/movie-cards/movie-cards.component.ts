import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Movie} from "../../interfaces";
import {ImagePipe} from "../../core/pipes";

@Component({
  selector: 'app-movie-cards',
  standalone: true,
  imports: [CommonModule, ImagePipe],
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardsComponent {
  @Input() movie: Movie.Movie = {} as Movie.Movie;

  protected readonly Movie = Movie;

}

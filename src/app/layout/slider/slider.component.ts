import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "../../pages/home/home.component";
import {Movie} from "../../interfaces";
import {ImagePipe} from "../../core/pipes";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, HomeComponent, ImagePipe],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  popularMovies: Movie.Popular = {} as Movie.Popular;
  @Input({required: true})
  set movies(movie: Movie.Popular | null) {
    if(!movie) {
      return;
    }
    this.popularMovies = {
      ...movie,
      backdrop_path: this.imagePipe.transform(movie?.backdrop_path, 'w1280')
    }
  }

  get movie(): Movie.Popular | null{
    return this.popularMovies;
  }

constructor(
private imagePipe: ImagePipe
) {
}
  image = 'assets/images/img/ironman.jpg';

}
